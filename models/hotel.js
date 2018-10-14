const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema ({
 hotelImage :String,
 hotelCity : String,
 hotelName :String,
 hotelAddress:String,
 hotelContact: Number,
 latitude : Number,
 longitude :Number,
 bedrooms:Number,
 bathrooms:Number,
 carSpaces:Number,
 price:Number    
})


const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;