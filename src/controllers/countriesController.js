var statsModel = require('../models/statsModel.js');
var Stats = new statsModel();

var countriesController = {
  async getList(req, res) {
    var summary = await Stats.getSummary();

    res.render('countries/index', {
      summary: summary
    });
  }
}

module.exports = countriesController;