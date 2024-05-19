const mongoose = require('mongoose');

const property = new mongoose.Schema({
   owner: String,
   place: String,
   area: String,
   nob: String,
   bathroom: String,
   hospitals:String,
   colleges: String,
   money: String,
   name: String,
   img: String,
})

module.exports = mongoose.model('properties',property)  