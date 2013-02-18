/* ==================================================
    Dependencies
===================================================== */
var express = require('express')
  , http    = require('http')
  , h5bp    = require('../lib/h5bp');
      
var app = express();
 
app.configure(function(){
  // Use H5BP as connect / express middleware
  app.use(h5bp({ 
    //root: __dirname + '/public' 
    server: 'express'
   ,www: false
   ,cors: true
  }));
  // Other middleware
  app.set('port', process.env.PORT || 8080);
  app.use(express.favicon(__dirname + '/public/ico/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compress());     
  app.use(express.static(__dirname + '/public'));
});
 
http.createServer(app).listen(app.get('port'), function(){
  console.log("H5BP server listening on port %d", app.get('port'));
});
