// Dependencies

require('dotenv').config();

const {PORT = 4000, MONGODB_URI} = process.env;

const express = require('express');

const app = express();

const mongoose = require('mongoose');

const cors = require('cors');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

// Database Connection

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});



// Connection Events
mongoose.connection
    .on('open', () => console.log('You are connected to mongoose'))
    .on('close', () => console.log('You are disconnected from mongoose'))
    .on('error', (error) => console.log(error));

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json()); 


// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));