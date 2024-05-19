const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const server2 = require('./server2');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

const port = 3000;