const express = require('express');
const router = require('./routes/routes.js');
const path = require('path');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['pepperoni', 'pizza']
}));

const mongoose = require('mongoose');
const user = process.env.DB_USER;
const pw = process.env.DB_PASSWORD;

mongoose.connect(`mongodb://${user}:${pw}@ds143163.mlab.com:43163/tinee`, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to db")
  }
});


app.use('/', router);

module.exports = app;