const mongoose = require("mongoose");

// Creates a collection in the MongoDB with below format
const JokeSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: [true, "Joke is required!"],
        minlength: [10, "Jokes must be at least 10 characters in length!"]
    },
    punchline: {
        type: String,
        required: [true, "Must enter a punchline!"],
        minlength: [1, "Punchline must have at least one character!"]
    },
    isFavorite:{
        type: Boolean,
        default: false
    }
}, {timestamps:true});


// Creates instance of a Joke collection (i.e. document)
const Joke = new mongoose.model("Joke", JokeSchema);

module.exports = Joke;