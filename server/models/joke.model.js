const mongoose = require("mongoose");

// Creates a collection in the MongoDB with below format
const JokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Joke is required."],
        minlength: [10, "Jokes must be at least 10 characters in length."]
    },
    isFavorite:{
        type: Boolean,
        default: false
    }
}, {timestamp:true});


// Creates instance of a Joke collection (i.e. document)
const Joke = new mongoose.model("Joke", JokeSchema);