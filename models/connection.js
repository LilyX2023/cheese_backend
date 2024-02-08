require('dotenv').config();
const mongoose = require('mongoose')
//DATABASE_URL
mongoose.connect(process.env.DATABASE_URL)

module.exports = mongoose;