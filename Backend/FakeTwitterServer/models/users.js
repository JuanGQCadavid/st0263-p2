var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({});

// This will add the username and password fields
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);