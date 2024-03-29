var express = require('express');
var router = express.Router();
var passport = require('passport');

const bodyParser = require('body-parser');
const cors = require('cors');

var User = require('../models/users');
var authenticate = require('../authenticate');

var router = express.Router();
router.use(bodyParser.json());

router.options('*', cors(), (req, res) => { res.sendStatus(200); });

/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', cors(), (req, res, next) => {
  User.register( new User({username: req.body.username}),
    req.body.password, (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    } else {
        passport.authenticate('local') (req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  });
});

router.post('/login', cors(), (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, status: 'Login Unsuccessful!', err: info});
      } else {
        req.logIn(user, (err) =>  {
          if (err) {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});
          } else {
            var token = authenticate.getToken({_id: req.user._id});
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true, status: 'Login Successful!', token: token});
          }
        });
      }
  }) (req, res, next);
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

router.get('/checkJWTToken', cors(), (req, res) => {
  passport.authenticate('jwt', {session: false}, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT invalid!', success: false, err: info});
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT valid!', success: true, user: user});
    }
  }) (req, res);
});

module.exports = router;
