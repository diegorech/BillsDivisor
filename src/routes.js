const express = require('express')
const userController = require('./controllers/userController')
const loginController = require('./controllers/loginController')
const router = express.Router()
const verify = require('./controllers/verifyRoute')

//Login routes ----------------------------------------

    router.post('/login', loginController.index)


//Main routes ------------------------------------------

    router.get('/user/main', verify, userController.userList)

//User routes ------------------------------------------

    router.post('/user/register', userController.store)

    router.get('/userList', userController.userList)








module.exports = router