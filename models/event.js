const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageurls: [],

    currentsbookings: [],
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const eventModel = mongoose.model('events', eventSchema)

module.exports = eventModel