var express = require('express');
var request = require('request');


module.exports = class Stats{
    
    constructor(){
        this.url_detail = 'https://covidapi.info/api/v1/';
        this.url_summary = 'https://api.covid19api.com/';
    }

    getChartStats = (type = "global", start_date = '', date = '') => {
        let url_params = type;
        url_params = (start_date != '' && date != '')?url_params + '/' + start_date + '/' + date:url_params;
        return new Promise(resolve => {
            request({ url: this.url_detail + url_params, json: true },
                function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    resolve(body);
                }
            })
        })
    }

    getStats = (type = "summary") => {
        return new Promise(resolve => {
            request({ url: this.url_summary + type, json: true },
                function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    resolve(body);
                }
            })
        })
    }

    searchByDates = async (dates, start_date) => {
        let promises = []; // hold all the promises

        dates.forEach((date) => {
            promises.push(this.getChartStats('global', start_date, date).then((body) => {  
                return body;
            }));
        });

        return Promise.all(promises) //wait for all the promises to finish (returns a promise)
        .then((result) => { return result; }); 
    };

    getSummary = async () => {
        return this.getStats().then((body) => {  
            return body;
        });
    };

    get getStatsByCountry(){

    }
}