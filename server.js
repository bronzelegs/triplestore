let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let port = 3000;

let mongoose = require('mongoose');
let assert = require('assert');
let morgan = require('morgan')



mongoose.Promise = require('bluebird');

// Configuring the database
let dbConfig = require('./config/db-config.js');
// create express app

let app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
//logger
app.use(morgan('combined'))

mongoose.connect(dbConfig.url, {
	useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to triple stores on mongo."});
});

require('./app/routes/tstore-routes.js')(app);

// listen for requests
app.listen(port, function(){
    console.log("Triple Store Srver is listening on port ", port);
});
