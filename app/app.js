const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/index.routes');
const { statusResponse } = require('./utils/responses');
const PORT = process.env.PORT || 4099;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

connect();

app.use('/api/v1', router);

app.use(function (_, res) {
  return statusResponse(res, 404, false, {message: 'Endpoint Not Found'});
});

// Mongoose uptime is very huge, so need to write retry logic for docker container

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnect', connect)
    .on('open', listen)

  return mongoose.connect(process.env.DB_URL, { keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true });
}



function listen() {
  app.listen(PORT, () => console.log(`Listening on ::${PORT}`));
}
