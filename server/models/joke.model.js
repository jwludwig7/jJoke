const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        delivery: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        }
    },
    {timestamps: true}
);


/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Joke = mongoose.model("Joke", JokeSchema);

module.exports = {Joke: Joke};