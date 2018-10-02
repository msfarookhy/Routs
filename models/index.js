const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotels',(err)=>{ 
    if(err){
        console.log(err);
    }else {
        console.log("Database is connceted");
    } 
});
mongoose.Promise = Promise
module.exports.User = require('./users')
module.exports.Hotel = require('./hotel')