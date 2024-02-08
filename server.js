require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const CheeseRouter = require('./controllers/cheese')



const app = express();
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/cheese', CheeseRouter)

app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(3000, () => console.log(`listening to port 3000`))