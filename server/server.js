const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const powerController = require('./controllers/powerController.js') 

//parse JSON incoming request
app.use(express.json());
const statesRouter = express.Router()
app.use('/api/states', statesRouter)


//serve the root domain when app is loaded
statesRouter.get('/', powerController.getStates, (req, res) => {
    //send 200 status, serve index.html file, and send array list of states to client
    res.status(200).sendFile(path.join(__dirname, '../client/index.html')).send(res.locals.states);
});


//POST request for user-selected US state - returns object with two properties, renewable energy and non-renewable energy generation
statesRouter.post('/data', powerController.loadState, (req, res)=>{
    //send back a status code and the breakdown of renewables vs non-renewable energy gen in user selected state
    res.status(200).json(res.locals.stateData);
});


//POST request for user-selected calculation (eg, percentage)


//Any unrouted traffic given a 404 error page
app.use('*', (req, res) => res.status(404).sendFile(path.join(__dirname, '../client/404.html' )))

// global error handler (TODO)
app.use((err, req, res, next) => {
    const defaultErr = {
    log: 'Global Error Handler Caught an Error',
    status: 500,
    message: { err: 'An error occured on the server' 
    }}
  console.log(err);
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj)
  res.status(errorObj.status).json(errorObj.message);
});


//set the server up to listen for requests on 
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});// // load// // 