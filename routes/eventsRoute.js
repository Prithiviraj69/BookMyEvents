const express = require("express");
const router = express.Router();

const Event = require('../models/event')

router.get("/getallevents", async(req, res) => {

    try {
        const events = await Event.find({})
        res.send(events)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/geteventbyid", async(req, res) => {

    const eventid = res.body.eventid.trim();

    try {
        const event = await Event.findOne({ _id: eventid })
        res.send(event)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });
    }

});

module.exports = router