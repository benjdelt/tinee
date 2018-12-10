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
  if (req.session.userId) {
    url.user_id = req.session.userId;
  }
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

router.post('/urls/:id', (req, res) => {
  Url.findOneAndUpdate({_id: req.params.id }, { longVersion: req.body.longUrl}, (err, url) => {
    if (err) {
      console.error(err);
    }
    url.longVersion = req.body.longUrl;
    res.json(url);
  })
})

router.get('/urls/', (req, res) => {
  Url.find({ user_id: req.session.userId }, (err, urls) =>{
    if(err) {
      console.error(err)
    }
    res.json(urls);
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
  if (req.session.userId) {
    req.session = null;
    res.status(200).send();    
  } else if (!req.body.password.trim()) {
    res.status(403).send('Empty Password');
  } else {
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
  }
})


router.get('/users/sessions/', (req, res) => {
  if(req.session.userId) {
    User.findById(req.session.userId, (err, user) => {
      if(err) {
        console.error(err);
      }
      res.json({
        userId: user._id,
        email: user.email
      });
    }) 
  } else  {
    res.json({userId: ''});
  }
})


module.exports = router;