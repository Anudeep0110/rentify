const express = require('express');
const cors = require('cors');
const connection = require('./Connection')
const col_users = require('./databases/login');
const col_properties = require('./databases/properties');

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.listen(8888,() => {
    console.log("Listening on PORT 8888");
})