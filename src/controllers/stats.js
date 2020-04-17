var express = require('express');
var router = express.Router();
var statsModel = require('../models/statsModel.js');
var Stats = new statsModel();
var $ = require('jquery');

const MAX_DATES = 6;

searchByDates = async (dates) => {
  let s = [];
  let promises = []; // hold all the promises
  dates.forEach((date) => {
    promises.push(Stats.getAllStats('global', date).then((body) => {  
      return body;
    }));
  });
  return Promise.all(promises) //wait for all the promises to finish (returns a promise)
  .then((result) => { return result; }); 
};


// Home page route.
router.get('/', async function (req, res) {
  let date_now = new Date();
  let date = new Date();
  let start_date = new Date('2020-1-22');
  let dates = [];
  const diffTime = Math.abs(date - start_date);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  diffDays = diffDays / 6;

  date.setDate(date.getDate() - (MAX_DATES * diffDays));
  
  for(let i = 0; i < MAX_DATES; i++){
    (i+1 < MAX_DATES)?date.setDate(date.getDate() + diffDays):date = date_now;
    dates.push(date.toLocaleDateString());
  }

  var body = await searchByDates(dates);
  res.render('index', { body: JSON.stringify(body) });

});

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;