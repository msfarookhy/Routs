const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/university');
if (err){
    console.log(err);
}else {
    console.log("Data Base is connected")
}

mongoose.Promise = Promise

modules.export.University = require('/university')