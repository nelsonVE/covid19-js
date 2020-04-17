var express = require('express');
var router = express.Router();
var request = require('request');


module.exports = class Stats{
    
    constructor(){
        this.url = 'https://covidapi.info/api/v1/';
    }

    getAllStats = (type = "global", date = '') => {
        return new Promise(resolve => {
            request({ url: this.url + type + '/' + date, json: true },
                function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    resolve(body);
                }
            })
        })
    }

    get getStatsByCountry(){

    }
}