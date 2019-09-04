const express = require ('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const app = express()



//Connect to DB
mongoose.connect('mongodb+srv://diego:diego@cluster0-pihyz.mongodb.net/BillsDivisor?retryWrites=true&w=majority',
{ useNewUrlParser: true },
() => console.log('Connected to DB')
)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)


app.listen(3333, () => console.log('Server UP'))