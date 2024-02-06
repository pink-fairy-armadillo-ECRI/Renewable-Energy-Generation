//const { query } = require('../models/powerPlantModel.js');
const db = require("../models/powerPlantModel.js");
const powerController = {};

//data table we are pulling from: https://atlas.eia.gov/datasets/eia::power-plants/explore?location=34.178407%2C-101.709976%2C4.96&showTable=true
//query variables containing SQL query statements in string form
const STATES_QUERY =
  'SELECT DISTINCT power_plants."State" FROM power_plants ORDER BY power_plants."State" ASC;';

//this method queries the DB and returns an array of all available states in an array to display in front end drop down.
powerController.getStates = async (req, res, next) => {
  try {
    //fetch a list of distinct states from our database
    const statesList = await db.query(STATES_QUERY);
    //convert to array
    const rows = statesList.rows;
    const result = [];
    //iterate through the array of objects and push each State value to the "result" array
    rows.forEach((el) => {
      result.push(el.State);
    });
    res.locals.states = result;
    //pass "states" data on
    return next();
  } catch {
    // Error Handler -- specific error message
    return next({
      log: "Express error handler caught an error in getStates middleware",
      status: 500,
      message: { err: "An error occured loading the application" },
    });
  }
};

//This middleware takes the url query, a state name, and returns decimal percentage of Renewable Energy Generation vs Non-Renewable Energy Generation
powerController.loadState = async (req, res, next) => {
  //pull state string from query on request
  const state = req.query.state
  //TODO: finagle this to work with global error handler
  if (typeof state !== 'string') return next({err: 'input should be a string'})

  const RE_QUERY = `SELECT SUM("Total_MW") AS Total_mw, SUM("Hydro_MW") AS Hydro_mw, SUM("Wind_MW") AS wind_mw, SUM("Solar_MW") AS solar_mw, SUM("Geo_MW") AS geo_mw, SUM("Bio_MW") AS bio_mw, SUM("HydroPS_MW") AS HydroPs_mw FROM power_plants WHERE power_plants."State" = '${state}';`;
  const PLANTS_QUERY = `SELECT power_plants."Plant_Name", power_plants."Total_MW" FROM "public"."power_plants" WHERE power_plants."State" = '${state}' ORDER BY power_plants."Total_MW" DESC LIMIT 5 ;`;

  try {
    const data = await db.query(RE_QUERY);
    //set rows as the relevant data object
    const rows = data.rows[0];

    //logic to pull renewable and non-renewable energy as percents of total MW
    const totalMW = rows.total_mw;
    //check for null return --> query returned no results, typically
    //due to bad WHERE condition
    if (!totalMW) {
      return next({ err: "An error occured fetching the data" });
    }
    //re and nre = renewable and non-renewable energy totals as decimal percentages
    const re =
      (Object.values(rows).reduce((a, b) => a + b, 0) - totalMW) / totalMW;
    const nre = 1 - re;
    //note: percentages passed solely as decimals; converting to percent happens in chart

    // logic for renewable energy sources as decimal percents of renewable energy total
    //include total RE in MW
    const reTotal = Object.values(rows).reduce((a, b) => a + b, 0) - totalMW;

    //set percents object as empty to start
    percents = {};
    //loop through the data and convert to decimal percentages fixed at 5 decimals
    for (let key in rows) {
      percents[key] = Number((rows[key] / reTotal).toFixed(5));
    }
    percents.total_mw = reTotal;
    //combine hydro and hydroPS (power storage hydro) under "hydro_mw"
    const hydro = percents.hydro_mw + percents.hydrops_mw;
    percents.hydro_mw = hydro;
    delete percents.hydrops_mw;

    //pull list of top 5 power plants by state
    const plants_result = await db.query(PLANTS_QUERY);
    plants = plants_result.rows;

    //send data through res.locals
    res.locals.stateData = {
      re: Number(re.toFixed(5)),
      nre: Number(nre.toFixed(5)),
      //already fixed percents decimals
      percents: percents,
      plants: plants,
    };
    return next();
  } catch (error) {
    //Error Handler
    return next(error);
  }
};

// Export the controller object
module.exports = powerController;

//SELECT SUM("Total_MW") AS Total_mw, SUM("Hydro_MW") AS Hydro_mw, SUM("Wind_MW") AS wind_mw, SUM("Solar_MW") AS solar_mw, SUM("Geo_MW") AS geo_mw, SUM("Bio_MW") AS bio_mw, SUM("HydroPS_MW") AS HydroPs_mw FROM power_plants WHERE power_plants."State" = 'Washington';
