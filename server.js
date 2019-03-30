//DOTENV for environment variables. Should just need one declaration
require('dotenv').config();

//Express and router
const express = require('express');
const router = express.Router();

const path = require('path');
//bodyParser middleware so we can quickly get the body of the request
const bodyParser = require('body-parser');

//Start up app
const app = express();
//TODO: perhaps move this to an environment variable
const port = 8080;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//Routes
var bugdropcompleted = require('./routes/bugdropcompleted.js');
app.use('/bugdrop', bugdropcompleted);

//Start app
app.listen(port, () => console.log(`Example app listening on port ${port}`));
