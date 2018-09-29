const mongoose = require('mongoose');
//const passportLocalMongoose = require ('passport-local-mongoose')
const hotelSchema = new mongoose.Schema ({
 hotelImage :String,
 hotelCity : String,
 hotelName :String,
 hotelAddress:String,
 hotelContact: Number,
 
    
})
// Hotel.plugin(passportLocalMongoose);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;