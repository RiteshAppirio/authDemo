var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/home',function(req,res){
  res.send('<h1>Home</h1>');
});
router.get('/contact',function(req,rest) {
  res.send('<h1>Contact Us</h1>');
});


module.exports = router;
