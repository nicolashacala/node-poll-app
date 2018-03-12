const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//DB config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

//Set Public folder
app.use(express.static(path.join(__dirname, 'public')));

//Body-parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Enable CORS
app.use(cors());

app.use('/poll', poll);

//Port
const PORT = 8080;

//Start Server
app.listen(PORT, () => console.log('Server running on: ' + PORT));