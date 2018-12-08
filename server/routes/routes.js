const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/User');
const Url = require('../../models/Url');
const makeId = require('../helpers/random-string-generator');


router.get('/', (req, res) => {
  res.render('index');
})

router.post('/urls/',(req, res) => {
  Url.deleteMany({user_id: undefined}, err => {
    if (err) console.error(err)
  });
  const url = new Url();
  url.shortVersion = makeId();
  url.longVersion = req.body.longUrl;
  url.createdAt = new Date();
  url.save((err, url) => {
    if (err) {
      res.send(err);
    } else {
      res.json(url);
    }
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

router.post('/users', (req, res) => {
  if (!req.body.password.trim()) {
    res.status(403).send('Empty Password');
  }
  const user = new User();
  user.email = req.body.email;
  user.passwordDigest = bcrypt.hashSync(req.body.password, 10);
  user.save((err, user) => {
    if(err) {
      res.send(err);
    } else {
      res.json(user);
    }
  })
})

router.post('/users/sessions', (req, res) => {
  if (!req.body.password.trim()) {
    res.status(403).send('Empty Password');
  }
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      res.send(err);
    } else if (!user || !bcrypt.compareSync(req.body.password, user.passwordDigest)) {
      res.send("Invalid Credentials")
    } else {
      req.session.userId = user._id
      res.json(user._id);
    }
  })
})

router.get('/users/sessions/', (req, res) => {
  if(req.session.userId) {
    res.json(req.session.userId)
  }
})


module.exports = router;