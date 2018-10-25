var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var {loggedIn} = middleware;
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

// updating Hotel Rout
router.get('/updh',(req,res)=>{
  res.render('updh');
});
router.get('/maps',(req,res)=>{
  res.render('hotel')
})
module.exports = router;
