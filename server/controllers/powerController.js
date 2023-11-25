//const { query } = require('../models/powerPlantModel.js');
const db = require('../models/powerPlantModel.js');
const powerController = {};

//query variables containing SQL query statements in string form
const queryStates = 'SELECT DISTINCT power_plants."State" FROM power_plants ORDER BY power_plants."State" ASC'


//this method queries the DB and returns an array of all available states in an array.
powerController.getStates = async (req, res, next) => {
  try {
    //fetch a list of distinct states from our database
    
    //convert to array
    
    //assign the resultant array to res.locals
    res.locals.states = //array 
    //pass "states" data on
    return next(res.locals.states).console.log('res.locals.states', res.locals.states)
  } catch {

  }
    
    //State list get method
    fetch()
        //SELECT DISTINCT power_plants."State" FROM power_plants ORDER BY power_plants."State" ASC' ;


}


// Export the controller object
module.exports = powerController;