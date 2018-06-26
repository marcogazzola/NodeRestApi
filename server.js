var app = require('./app');
var config = require('./config');

var port = config.web.port;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});