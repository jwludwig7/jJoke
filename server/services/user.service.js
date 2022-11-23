const {User} = require("../models/User.model");

const createUser = async (data) => {
    console.log('service: createUser');
    const user = await User.create(data);
    return user;
}

const getAllUsers = async () => {
    console.log('service: getAllUsers');
    const users = await User.find();
    return users;
}

const getUserById = async (id) => {
    console.log('service: getUserById');
    const user = await User.findById(id);
    return user;
}

const deleteUserById = async (id) => {
    console.log('service: deleteUserById');
    const user = await User.findByIdAndDelete(id);
    return user;
}

const getUserByIdAndUpdate = async (id,data) => {
    console.log('service: getUserByIdAndUpdate');
    const user = await User.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated User.
        new:true
    });
    return user;
}

module.exports = {
    createUser: createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    getUserByIdAndUpdate,
};