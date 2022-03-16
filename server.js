const express = require("express");

const app = express();

const dbConfig = require('./db')
const eventsRoute = require('./routes/eventsRoute')

app.use(express.json());

app.use('/api/events', eventsRoute)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node Server started using nodemon`));