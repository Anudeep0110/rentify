const express = require('express');
const cors = require('cors');
const connection = require('./Connection')
const col_users = require('./databases/login');
const col_properties = require('./databases/property');

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/login',(req,res) => {
    console.log(req.body);
    col_users.find({email: req.body.uname,password: req.body.pwd})
    .then(res2 => {
        console.log(res2);
        if(res2.length !== 0){
            res.json(true)
        }else{
            res.json(false)
        }
    })
    .catch(err => {
        console.log(err);
    })

}) 
module.exports = app 