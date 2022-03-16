const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://prithiviraj:AbhimanyU69@cluster0.r4erl.mongodb.net/mern-events'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
    console.log('MongoDB connection failed')
})

connection.on('connected', () => {
    console.log('MongoDB connection Successfully')
})

module.exports = mongoose