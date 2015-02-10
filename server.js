require('nodebootstrap-server').setup(function(runningApp) {

  //---- Mounting well-encapsulated application modules
  //---- See: http://vimeo.com/56166857

  runningApp.use('/hello', require('hello')); // attach to sub-route
  runningApp.use('/terminal', require('terminal'));
  runningApp.use(require('routes')); // attach to root route

  var path = require('path');
  global.appRoot = path.resolve(__dirname);

});
