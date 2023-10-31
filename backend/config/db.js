const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://manideep:manideep@cluster0.ugp5u4z.mongodb.net/aa")

module.exports = connection