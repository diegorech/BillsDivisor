
const Users = require('../models/Users')
const bcrypt = require('bcryptjs')
const { userValidation } = require('../validation')



module.exports = {


    
    async index(req, res) {
        const { user } = req.headers

        const loggedUser = await Users.findById(user)

        console.log(loggedUser)
        
        return res.json(loggedUser) 
        
    },

    async store(req, res) {

        //Validation
        const { error } = userValidation(req.body)
        if( error ) return res.status(400).send(error)

        //Check if user exists
        const userExists = await Users.findOne({ 
            email: req.body.email 
        })

        if ( userExists ) return res.status(400).send('User already exists')


        //Hash password
        //const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, 10)  


        //Create new user
        const user = new Users({
          
            name: req.body.name,
            email: req.body.email,
            password: hashedPass  

        })
        try{
            const savedUser = await user.save()
            console.log(`${ savedUser.name } criado com sucesso`)
            res.send( savedUser )
        }catch(err) {
            res.status(400).json({ message:err })
        }
        
   },

   
   
   async userList(req, res) {
       const userList = await Users.find()
       

       return res.send(userList)
   }
    
}
