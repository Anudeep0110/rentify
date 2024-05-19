const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const server2 = require('./server2');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/login',(req,res) => {
    console.log(req.body);
    
})

module.exports = app