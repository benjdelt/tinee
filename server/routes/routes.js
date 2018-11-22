const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const User = require('../../models/User');
const Url = require('../../models/Url');


router.get('/', (req, res) => {
  res.render('index');
})

router.post('/urls/',(req, res) => {
  console.log(req.body);
  // Url.insertOne
})


module.exports = router;