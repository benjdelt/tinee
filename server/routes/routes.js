const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const User = require('../../models/User');
const Url = require('../../models/Url');
const makeId = require('../helpers/random-string-generator');


router.get('/', (req, res) => {
  res.render('index');
})

router.post('/urls/',(req, res) => {
  const url = new Url();
  url.shortVersion = makeId();
  url.longVersion = req.body.longUrl;
  url.createdAt = new Date();
  url.save((err, url) => {
    if (err) {
      res.send(err);
    }
    res.json(url);
  })
})

router.get('/u/:shortUrl', (req, res) => {
  Url.findOne({shortVersion: req.params.shortUrl}, (err, entry) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect(entry.longVersion);
    }
  })
})


module.exports = router;