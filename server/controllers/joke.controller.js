const Joke = require("../models/joke.model");

module.exports = {
    index: (req, res) => {
        Joke.find()
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    create: (req, res) => {
        Joke.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    show: (req, res) => {
        Joke.find({_id: req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    update: (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },             //filter
            req.body,                           //replacement
            { new: true, runValidators: true }  //options
        )
            .then(data => res.json({ results: data }))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    delete: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
        .then(data => res.json({results: data}))
        .catch(err => res.status(404).json({errors: err.errors}))
    }
};