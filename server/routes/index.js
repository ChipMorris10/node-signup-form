var express = require('express');
var router = express.Router();

// Get Request is getting information from Root
router.get('/', function(req, res, next) {

    res.render('index', { title: 'What is your name?', myName: 'Chip'});
});

// Submits data to be processed to a specified resource
router.post('/submit', function(req, res, next) {
  // res.send(req.body.email);

// When I hit submit, it's redirecting to Localhost:3000/success (which is an absolute address)
    res.redirect('/success');
console.log(req.body.email);
});

//  Get Request is getting information from
router.get('/success', function(req, res, next) {
res.send('success!');
});

module.exports = router;
