const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const powerController = require('./controllers/powerController.js') 


//Initial call is when someone starts typing into the 

//parse JSON incoming request
app.use(express.json());

//serve the root domain when app is loaded
app.get('/', powerController.getStates, (req, res) => {
    console.log("done!")
    res.status(200).sendFile(path.join(__dirname, '../client/index.html')).send(res.locals.states)
});

// .json(res.locals.states)

//POST request for user-selected US state
// app.post('/state', powerController.loadState, (req, res)=>{
//     console.log("DONE!!")
//     res.status(200).json(res.locals.states)  //send back a status code and an array of state strings
// });

//POST request for user-selected calculation (eg, percentage)


//Any unrouted traffic given a 404 error page
app.use('*', (req, res) => res.status(404).sendFile(path.join(__dirname, '../client/404.html' )))

//global error handler (TODO)
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send({ error: err });
// });


//set the server up to listen for requests on 
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});// // load// // 