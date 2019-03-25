var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./model/model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/niranjan'); 
var dbHost="mongodb+srv://niranjan:ninnu8099455377@mongodb1-u35wo.mongodb.net/test?retryWrites=true"
mongoose.connect(dbHost)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./route/route'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
