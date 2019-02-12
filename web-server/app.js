// var https = require('https');
var express = require('express');

var fs = require('fs');

/*var options = {
  key: fs.readFileSync('../shared/server.key'),
  cert: fs.readFileSync('../shared/server.crt')
};*/

var app = express();

//app.use(express.methodOverride());
//app.use(express.bodyParser());
//app.use(app.router);
app.set('view engine', 'jade');
app.set('views', __dirname + '/public');
app.set('view options', {layout: false});
app.set('basepath', __dirname + '/public');

let env = process.env.NODE_ENV || 'development';

let errorhandler = require('errorhandler');

if('development' == env){
  app.use(express.static(__dirname + '/public'));
  app.use(errorhandler({log: false}));  // Only send the error back in the response @see https://www.npmjs.com/package/errorhandler
}

if('production' == env){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(errorHandler());
}

console.log("Web server has started.\nPlease log on http://127.0.0.1:3001/index.html");

/*var httpsServer = https.createServer(options, app);
httpsServer.listen(3001);*/
app.listen(3001);
