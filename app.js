
/**
 * Module dependencies.
 */

var express = require('express')
  , mysql = require('mysql')
  , bodyParser = require('body-parser');

var app = express();

//app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' });
});

var sql = require('./db.js');

var parcels = require('./controllers/parcelController');

var routes = require('./routes/parcelRoutes'); //importing route
routes(app); //register the route

//port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
