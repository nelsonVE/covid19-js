var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

const PORT = 8081;

var router = require('./src/router.js');

app.use('/', router);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/chart.js/dist'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/chart.js/dist'));
app.use('/js', express.static(__dirname + '/public/js'));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.listen(PORT, () => {
    console.log(`COVID-19 STATS: Server running in localhost:${PORT}`);
});