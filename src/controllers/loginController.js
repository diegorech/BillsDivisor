const Users = require('../models/Users')
const { loginValidation } = require('../validation')
const bcrypt = require ('bcryptjs')
var jwt = require('jsonwebtoken')


module.exports = {

    async index(req, res) {

        
        // //Validation
        const { error } = loginValidation(req.body)
        if( error ) return res.status(400).send(error.details[0].message)
        
        //Check if exists  
        
        const user = await Users.findOne({email: req.body.email})
        

        if( !user ) return res.status(400).send('Email not found')
        //console.log(user)

        //Check password
        
        const validPass = await bcrypt.compare(req.body.password, user.password)
        
        
        if( !validPass ) return res.status(400).send('Wrong pass')//temporário para teste


        //JWT verify
        const token = await jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)
        res.header('auth-token', token).send(token)
    } 

}