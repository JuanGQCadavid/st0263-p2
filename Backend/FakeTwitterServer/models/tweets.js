const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

var Tweets = mongoose.model('Tweet', tweetSchema);

module.exports = Tweets;