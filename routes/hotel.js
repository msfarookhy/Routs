const express = require('express');
const router = express.Router();
const db = require('../models');

// hotel rout
router.get('/',(req,res)=>{
    db.Hotel.find()
    .then((hotel)=> res.json(hotel))
    .catch((err)=>res.send(err));
});

//create a new hotel - u have to post , and .create(mongoose method) to create new hotel ...
router.post('/',(req,res)=>{
    db.Hotel.create(req.body)
    .then(res.redirect("/hotel"))
 //.then((hotels)=>res.json(hotels))
    .catch((err)=>res.send(err));
});


// page for particular hotel
router.get ('/:id',(req,res)=>{
    let id = req.params.id;
    db.Hotel.findById(id)
    .then((hotel)=> res.json(hotel))
    .catch((err)=>res.send(err));
});

// update Hotel Details
router.put('/:id',(req,res)=>{
    db.Hotel.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((hotel)=> res.json(hotel))
    .catch((err)=>res.send(err));
});

//deleting Hotel
router.delete('/:id',(req,res)=>{
    db.Hotel.remove({_id:req.params.id})
    .then(res.send("Hotel Is Delted"))
    .catch((err)=>res.send(err));
})

module.exports = router;