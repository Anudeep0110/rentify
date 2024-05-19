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


app.post('/delete',(req,res) =>{
    const id = req.body.id;
    col_properties.deleteOne({_id: id})
    .then(() =>{
        res.send('deleted')
    })
    .catch(err =>{
        console.log(err);
    })
})

app.post('/addproperties',(req,res) =>{
    const owner = req.body.owner;
    const place = req.body.place;
    const area = req.body.area;
    const nob = req.body.nob;
    const bathroom = req.body.bathroom;
    const hospitals = req.body.hospitals;
    const colleges = req.body.colleges;
    const money = req.body.money;
    const name = req.body.name;

    const property = new col_properties({
        owner: owner,
        place: place,
        area: area,
        nob: nob,
        bathroom: bathroom,
        hospitals: hospitals,
        colleges: colleges,
        money: money,
        name: name
    });

    property.save()
    .then(() =>{
        res.send('Property Added')
    })
    .catch(err =>{
        console.log(err);
    })
})

app.post('/editproperty',(req,res) =>{
    const id = req.body.id;
    const owner = req.body.formData.owner;
    const place = req.body.formData.place;
    const area = req.body.formData.area;
    const nob = req.body.formData.nob;
    const bathroom = req.body.formData.bathroom;
    const hospitals = req.body.formData.hospitals;
    const colleges = req.body.formData.colleges;
    const money = req.body.formData.money;
    const name = req.body.formData.name;

    col_properties.updateOne({_id: id},{
        owner: owner,
        place: place,
        area: area,
        nob: nob,
        bathroom: bathroom,
        hospitals: hospitals,
        colleges: colleges,
        money: money,
        name: name
    })
    .then(() =>{
        res.send('Property Updated')
    })
    .catch(err =>{
        console.log(err);
    })
})

module.exports = app