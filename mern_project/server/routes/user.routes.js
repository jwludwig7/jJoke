// const express = require('express');

// const {
//     handleCreateUser,
//     handleGetAllUsers,
//     handleGetUserById,
//     handleDeleteUserById,
//     handleUpdateUserById
// } = require('../controllers/user.controller')


// const router = express.Router();


// router.get('/', handleGetAllUsers)
// router.post('/', handleCreateUser)
// router.get('/:id', handleGetUserById)
// router.delete('/:id', handleDeleteUserById)
// router.put('/:id', handleUpdateUserById)


// module.exports = { userRouter: router }


const UserController = require('../controllers/user.controller');
const { authenticate } = require("../config/config.JWT");

module.exports = (app) => {
    // console.log(" OH Hi")
    // app.get("/api/test", (req,res) => {
    //     console.log("In the routes");
    //     UserController.test(req,res)})
    app.post("/api/login", UserController.login);
    app.post('/api/create/user', UserController.register);
    app.get('/api/user', authenticate, UserController.index);  //add authenticate back in after route
    app.get('/api/user/:id', authenticate, UserController.show); //add authenticate back in after route
    app.put('/api/update/user/:id', authenticate, UserController.update); //add authenticate back in after route
    app.delete('/api/destroy/user/:id', authenticate, UserController.destroy); //add authenticate back in after route
    app.get("/api/logout", authenticate, UserController.logout);                    //need to add 'user' to path?  '/api/user/logout?
    app.get("/api/user/loggedin", authenticate, UserController.getLoggedInUser);
}




// ************************************************************************** from Repo
// const userController = require("../controllers/user.controller");
// const { authenticate } = require("../config/jwt.config");

// module.exports = app => {
//     app.post("/api/register", userController.register);
//     app.post("/api/login", userController.login);
//     app.post("/api/logout", userController.logout);

//     // this route now has to be authenticated
//     app.get("/api/users", authenticate, userController.getAll);
//     app.get("/api/users/loggedin", authenticate, userController.getLoggedInUser);
// };