var express = require('express');
var router = express.Router();
var db = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/home',(req,res)=>{
  res.render('hotel');
});

// hotel rout 
// router.get('/hotel',(req,res)=>{
//   res.render('hotel');
// });

//login rout
router.get('/login',(req,res)=>{
  res.render('login');
});

// signuprout

router.get('/signup',(req,res)=>{
  res.render('signup');
});

// add hotel rout
router.get('/addHotel',(req,res)=>{
  res.render('addHotel');
});
module.exports = router;
