const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Tweets = require('../models/tweets');

const tweetRouter = express.Router();

tweetRouter.use(bodyParser.json());

tweetRouter.route('/')
.options(cors(), (req, res) => { res.sendStatus(200); })
.get(cors(), (req, res, next) => {
    if (req.query['author']) {
        Tweets.find({ author: req.query['author'] })
        .then((tweets) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweets);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
    } else if (req.query['topic']) {
        Tweets.find({ topic: req.query['topic'] })
        .then((tweets) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweets);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
    } else {
        Tweets.find({})
        .then((tweets) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweets);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
    }
})
.post(cors(), (req, res, next) => {
    Tweets.create(req.body)
        .then((tweet) => {
            console.log('Tweet created ', tweet);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweet);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
})
.put(cors(), (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT not supported');
})
.delete(cors(), (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported')
});

tweetRouter.route('/:tweetId')
.options(cors(), (req, res) => { res.sendStatus(200); })
.get(cors(), (req, res, next) => {
    Tweets.findById(req.params.tweetId)
        .then((tweet) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweet);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
})
.post(cors(), (req, res, next) => {
    res.statusCode = 403;
    res.end('POST not supported');
})
.put(cors(), (req, res, next) => {
    Tweets.findByIdAndUpdate(req.params.tweetId, {
        $set: req.body
    }, { new: true })
        .then((tweet) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweet);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
})
.delete(cors(), (req, res, next) => {
    Tweets.findByIdAndRemove(req.params.tweetId)
        .then((resp) => {
            req.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
});

module.exports = tweetRouter;