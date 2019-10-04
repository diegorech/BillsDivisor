const express = require ('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config()


//Connect to DB
mongoose.connect( 
    process.env.DB_LINK,
    { useNewUrlParser: true },
    () => console.log('Connected to DB')
)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)


app.listen(3333, () => console.log('Server UP'))