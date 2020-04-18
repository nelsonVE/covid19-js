var express = require('express');
var router = express.Router();
var statsModel = require('../models/statsModel.js');
var Stats = new statsModel();

// Home page route.
router.get('/', async function (req, res) {
  var summary = await Stats.getSummary();

  res.render('countries/index', {
    summary: summary
  });

});

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;