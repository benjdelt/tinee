const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const User = require('../../models/User');
const Url = require('../../models/Url');


router.get('/', (req, res) => {
  res.render('index');
})

module.exports = router;