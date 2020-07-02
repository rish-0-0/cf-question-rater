const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4099;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

connect();

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
