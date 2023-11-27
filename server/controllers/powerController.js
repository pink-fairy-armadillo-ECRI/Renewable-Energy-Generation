//const { query } = require('../models/powerPlantModel.js');
const db = require('../models/powerPlantModel.js');
const powerController = {};

//data table we are pulling from: https://atlas.eia.gov/datasets/eia::power-plants/explore?location=34.178407%2C-101.709976%2C4.96&showTable=true
//query variables containing SQL query statements in string form
const STATES_QUERY = 'SELECT DISTINCT power_plants."State" FROM power_plants ORDER BY power_plants."State" ASC;'

//this method queries the DB and returns an array of all available states in an array to display in front end drop down.
powerController.getStates = async (req, res, next) => {
  try {
    //fetch a list of distinct states from our database
    const statesList = await db.query(STATES_QUERY)
    //convert to array    
    const rows = statesList.rows
    const result = []
    //iterate through the array of objects and push each State value to the "result" array
    rows.forEach((el) => {
      result.push(el.State)
    })
    res.locals.states = result;
    //pass "states" data on
    return next();
  } catch {
  // Error Handler -- specific error message
    return next({
        log: 'Express error handler caught an error in getStates middleware',
        status: 500,
        message: { err: 'An error occured loading the application' },
      })
  }
}


//This middleware takes the url query, a state name, and returns decimal percentage of Renewable Energy Generation vs Non-Renewable Energy Generation
powerController.loadState = async (req, res, next) => {
  //pull state string from query on request
  const state = req.query.state
  if (typeof state !== 'string') return next({err: 'input should be a string'})

  const RE_QUERY = `SELECT SUM("Total_MW") AS Total_mw, SUM("Hydro_MW") AS Hydro_mw, SUM("Wind_MW") AS wind_mw, SUM("Solar_MW") AS solar_mw, SUM("Geo_MW") AS geo_mw, SUM("Bio_MW") AS bio_mw, SUM("HydroPS_MW") AS HydroPs_mw FROM power_plants WHERE power_plants."State" = '${state}';`
  
  try{
    const data = await db.query(RE_QUERY)
    //logic to pull ou the correct data and add to dataObj the two value we want
    const totalMW = data.rows[0].total_mw
    //check for null return --> query returned no results, typically
    //due to bad WHERE condition
    if (!totalMW) {
      return next({err: 'An error occured fetching the data'})
    }
    //re and nre = renewable and non-renewable energy totals as decimal percentages
    const re = (Object.values(data.rows[0]).reduce((a, b) => a + b, 0) - totalMW ) / totalMW
    const nre = 1 - re
    //fix to 5 digits after decimal
    //note: percentages passed solely as decimals; converting to percent happens in chart
    res.locals.stateData = {re: re.toFixed(5), nre: nre.toFixed(5)}
    return next()
  } catch (error){
    //Error Handler
    return next(error)
  }
}




// Export the controller object
module.exports = powerController;


//SELECT SUM("Total_MW") AS Total_mw, SUM("Hydro_MW") AS Hydro_mw, SUM("Wind_MW") AS wind_mw, SUM("Solar_MW") AS solar_mw, SUM("Geo_MW") AS geo_mw, SUM("Bio_MW") AS bio_mw, SUM("HydroPS_MW") AS HydroPs_mw FROM power_plants WHERE power_plants."State" = 'Washington';