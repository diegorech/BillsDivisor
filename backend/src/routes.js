const express = require('express')
const userController = require('./controllers/userController')


const router = express.Router()




//Login routes ----------------------------------------

    router.get('/', (req, res) => {
        res.send('Login Page')


//Main routes ------------------------------------------

    router.get('/user/main', userController.index)

//User routes ------------------------------------------

    router.post('/user/register', userController.store)

    router.get('/userList', userController.userList)
    

    

})







module.exports = router