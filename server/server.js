const path = require('path');
const express = require('express');

const powerController = require('./controllers/powerController.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const statesRouter = express.Router();
app.use('/api/states', statesRouter);

statesRouter.get('/', powerController.getStates, (req, res) => {
  res.status(200).json(res.locals.states);
});

statesRouter.post('/data', powerController.loadState, (req, res) => {
  res.status(200).json(res.locals.stateData);
});

app.use('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global Error Handler Caught an Error',
    status: 500,
    message: { err: 'An error occured on the server' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
