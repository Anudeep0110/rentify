const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const connection = require('./Connection')
const col_users = require('./databases/login');
const col_properties = require('./databases/property');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/properties',(req,res) =>{
    const owner = req.body.owner;
    col_properties.find({owner: owner})
    .then(properties =>{
        res.json(properties)        
    })
    .catch(err =>{
        console.log(err);
    })
})

app.post('/getproperty',(req,res) =>{
    const id = req.body.id;
    col_properties.find({_id: id})
    .then(property =>{
        const owner = property[0].owner;
        col_users.find({email: owner})
        .then(user =>{
            res.send({property: property,user: user[0]})        
        })
        .catch(err =>{
            console.log(err);
        })
    })
    .catch(err =>{
        console.log(err);
    })   
})

module.exports = app