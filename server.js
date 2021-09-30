// Dependencies

require('dotenv').config();

const {PORT = 4000, MONGODB_URI} = process.env;

const express = require('express');

const app = express();

const mongoose = require('mongoose');

// Database Connection

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,

});



// Connection Events
mongoose.connection
    .on('open', () => console.log('You are connected to mongoose'))
    .on('close', () => console.log('You are disconnected from mongoose'))
    .on('error', () => console.log(error));

// Routes
app.get('/', (req, res) => {
    res.send('hello world');
});

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));