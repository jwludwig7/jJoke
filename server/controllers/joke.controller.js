const {
    createJoke,
    getAllJokes,
    getJokeById,
    deleteJokeById,
    getJokeByIdAndUpdate,
} = require('../services/joke.service');


const handleCreateJoke = async (req, res) => {
    console.log('controller: handleCreateJoke req.body:', req.body);
    try {
        const joke = await createJoke(req.body);
        return res.json(joke)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllJokes = async (req, res) => {
    console.log('controller: handleGetAllJokes');
    try {
        const jokes = await getAllJokes();
        return res.json(jokes)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetJokeById = async (req, res) => {
    console.log('controller: handleGetJokeById req.params: ', req.params.id);
    try {
        const joke = await getJokeById(req.params.id);
        return res.json(joke)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteJokeById = async (req, res) => {
    console.log('controller: handleDeleteJokeById req.params: ', req.params.id);
    try {
        const joke = await deleteJokeById(req.params.id);
        return res.json(joke)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateJokeById = async (req, res) => {
    console.log('controller: handleUpdateJokeById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const joke = await getJokeByIdAndUpdate(req.params.id, req.body);
        return res.json(joke)
    } catch (error) {
        return res.status(400).json(error);
    }
}




module.exports = {
    handleCreateJoke: handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleDeleteJokeById,
    handleUpdateJokeById
}