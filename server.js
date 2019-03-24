const express = require('express');
const router = express.Router();

//bodyParser middleware so we can quickly get the body of the request
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

var bugdropcompleted = require('./routes/bugdropcompleted.js');

app.use('/bugdrop/completed', bugdropcompleted);

app.listen(port, () => console.log(`Example app listening on port ${port}`));