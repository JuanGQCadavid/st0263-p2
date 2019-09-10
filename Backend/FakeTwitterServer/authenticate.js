var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/users');

exports.local = passport.use(new LocalStrategy(User.authenticate()));

// Support for sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());