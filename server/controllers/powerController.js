//const { query } = require('../models/powerPlantModel.js');
const db = require('../models/powerPlantModel.js');
const powerController = {};

//query variables containing SQL query statements in string form
const STATES_QUERY = 'SELECT DISTINCT power_plants."State" FROM power_plants ORDER BY power_plants."State" ASC;'

//this method queries the DB and returns an array of all available states in an array.
powerController.getStates = async (req, res, next) => {
  try {
    //fetch a list of distinct states from our database
    const statesList = await db.query(STATES_QUERY)
    //convert to array
    console.log('THIS IS STATES LIST:', statesList)
    
    //assign the resultant array to res.locals
    //pull rows out of the statesList table
    //declare empty array "result"
    const rows = statesList.rows
    const result = []
    //iterate through the array of objects and push each State value to the "result" array
    rows.forEach((el) => {
      result.push(el.State)
    })
    console.log("array of strings", result)

    res.locals.states = result;
    //pass "states" data on
    console.log('res.locals.states', res.locals.states)
    return next(res.locals.states)
  } catch {
    //FILL THIS OUT WITH AN ERROR
    return next({
        log: 'Express error handler caught an error in getStates middleware',
        status: 500,
        message: { err: 'An error occured loading the application' },
      })
  }
    
    //State list get method
  
        //SELECT DISTINCT power_plants."State" FROM power_plants ORDER BY power_plants."State" ASC' ;


}


// Export the controller object
module.exports = powerController;