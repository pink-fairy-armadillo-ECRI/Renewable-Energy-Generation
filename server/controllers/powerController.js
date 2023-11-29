const db = require('../models/powerPlantModel.js');

const powerController = {};

powerController.getStates = async (req, res, next) => {
  try {
    const STATES_QUERY =
      'SELECT DISTINCT power_plants."State" FROM power_plants ORDER BY power_plants."State" ASC;';

    const statesList = await db.query(STATES_QUERY);
    const rows = statesList.rows;

    const result = [];
    rows.forEach((el) => {
      result.push(el.State);
    });

    res.locals.states = result;
    return next();
  } catch {
    return next({
      log: 'Express error handler caught an error in getStates middleware',
      status: 500,
      message: { err: 'An error occured loading the application' },
    });
  }
};

powerController.loadState = async (req, res, next) => {
  const state = req.query.state;

  const RE_QUERY = `SELECT SUM("Total_MW") AS Total_mw, SUM("Hydro_MW") AS Hydro_mw, SUM("Wind_MW") AS wind_mw, SUM("Solar_MW") AS solar_mw, SUM("Geo_MW") AS geo_mw, SUM("Bio_MW") AS bio_mw, SUM("HydroPS_MW") AS HydroPs_mw FROM power_plants WHERE power_plants."State" ILIKE '${state}';`;
  const PLANTS_QUERY = `SELECT power_plants."Plant_Name", power_plants."Total_MW" FROM "public"."power_plants" WHERE power_plants."State" ILIKE '${state}' ORDER BY power_plants."Total_MW" DESC LIMIT 5 ;`;

  try {
    const RE_QUERY = `SELECT SUM("Total_MW") AS Total_mw, SUM("Hydro_MW") AS Hydro_mw, SUM("Wind_MW") AS wind_mw, SUM("Solar_MW") AS solar_mw, SUM("Geo_MW") AS geo_mw, SUM("Bio_MW") AS bio_mw, SUM("HydroPS_MW") AS HydroPs_mw FROM power_plants WHERE power_plants."State" = '${state}';`;

    const data = await db.query(RE_QUERY);
    const rows = data.rows[0];
    const totalMW = rows.total_mw;

    if (!totalMW) {
      return next({ err: 'An error occured fetching the data' });
    }

    const re =
      (Object.values(rows).reduce((a, b) => a + b, 0) - totalMW) / totalMW;
    const nre = 1 - re;

    const reTotal = Object.values(rows).reduce((a, b) => a + b, 0) - totalMW;

    percents = {};

    for (let key in rows) {
      percents[key] = Number((rows[key] / reTotal).toFixed(5));
    }
    percents.total_mw = reTotal;

    const hydro = percents.hydro_mw + percents.hydrops_mw;
    percents.hydro_mw = hydro;
    delete percents.hydrops_mw;

    const PLANTS_QUERY = `SELECT power_plants."Plant_Name", power_plants."Total_MW" FROM "public"."power_plants" WHERE power_plants."State" = '${state}' ORDER BY power_plants."Total_MW" DESC LIMIT 5 ;`;

    const plants_result = await db.query(PLANTS_QUERY);
    plants = plants_result.rows;

    res.locals.stateData = {
      re: Number(re.toFixed(5)),
      nre: Number(nre.toFixed(5)),
      percents: percents,
      plants: plants,
    };
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = powerController;
