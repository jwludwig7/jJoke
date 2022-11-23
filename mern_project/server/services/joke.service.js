const {Joke} = require("../models/Joke.model");

const createJoke = async (data) => {
    console.log('service: createJoke');
    const joke = await Joke.create(data);
    return joke;
}

const getAllJokes = async () => {
    console.log('service: getAllJokes');
    const jokes = await Joke.find();
    return jokes;
}

const getJokeById = async (id) => {
    console.log('service: getJokeById');
    const joke = await Joke.findById(id);
    return joke;
}

const deleteJokeById = async (id) => {
    console.log('service: deleteJokeById');
    const joke = await Joke.findByIdAndDelete(id);
    return joke;
}

const getJokeByIdAndUpdate = async (id,data) => {
    console.log('service: getJokeByIdAndUpdate');
    const joke = await Joke.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated Joke.
        new:true
    });
    return joke;
}

module.exports = {
    createJoke: createJoke,
    getAllJokes,
    getJokeById,
    deleteJokeById,
    getJokeByIdAndUpdate,
};