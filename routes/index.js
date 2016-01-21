var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
var google_api = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA'
var my_key = '&key=' + 'AIzaSyAetKvyefueKnYHIduJnHdl0HDmQtwUgUs'
  request(google_api+my_key, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var jase = JSON.parse(body);
    var lat_long = jase.results[0].geometry.location;
    res.render('index', { title: 'Welcome to the map page!!', lat_long: lat_long });
   }
 })
});


module.exports = router;
