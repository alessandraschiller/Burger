var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req,res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req,res){
  burger.all(function(data){
    var hbsObj = {burgers: data};
    console.log(hbsObj);
    res.render('index',hbsObj);
  });
});

router.post('/burgers/create', function(req,res){
  burger.create(['burger'], [req.body.burger], function(){
    console.log(req.body.burger);

    //res.redirect('/burgers');
  })
});

router.put('/burgers/update/:id', function(req,res){
  var condition = 'id = ' + req.params.id;
  console.log(req.body);
  burger.update({devoured: req.body.devoured}, condition, function(){
    res.json(true);
  });
});

module.exports = router;
