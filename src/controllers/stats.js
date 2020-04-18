var express = require('express');
var router = express.Router();
var statsModel = require('../models/statsModel.js');
var Stats = new statsModel();
var $ = require('jquery');

const MAX_DATES = 7;

// Home page route.
router.get('/', async function (req, res) {
  let date = new Date();
  let start_date = new Date('2020-1-22');
  let start_date_param = new Date('2020-1-22');
  let dates = [];
  let info = [];
  const diffTime = Math.abs(date - start_date);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  diffDays = diffDays / 6;

  date.setDate(date.getDate() - (MAX_DATES * diffDays));
  
  for(let i = 0; i < MAX_DATES; i++){
    (i+1 < MAX_DATES)?((i === 0)?date = start_date:date.setDate(date.getDate() + diffDays)):date = '';
    dates.push((date instanceof Date)?date.toLocaleDateString():date);
  }

  var body = await Stats.searchByDates(dates, start_date_param.toLocaleDateString());
  var summary = await Stats.getSummary();

  info['NewDeaths'] = summary['Global']['NewDeaths'];
  info['TotalDeaths'] = summary['Global']['TotalDeaths'];
  info['NewRecovered'] = summary['Global']['NewRecovered'];
  info['TotalRecovered'] = summary['Global']['TotalRecovered'];

  res.render('stats/index', {
    body: JSON.stringify(body),
    info: info
  });

});

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;