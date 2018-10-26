const express = require('express');
const router = require('./routes/routes.js');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb://${user}:${password}@ds143163.mlab.com:43163/tinee`);


app.use('/', router);

module.exports = app;