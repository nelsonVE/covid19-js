var express = require('express');
var statsController = require('./controllers/statsController');
var countriesController = require('./controllers/countriesController');

var router = express.Router();

router.get('/home', statsController.getHome);
router.get('/countries', countriesController.getList);

module.exports = router;