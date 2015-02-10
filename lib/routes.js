/**
* This is a file where you can define various routes globally. It's better than
* defining those in server.js, but ideally you should be defining routes as part of
* modules. @see example "hello" module to get a taste of how this works.
*/

// Third party libraries
var express = require('express')
  , exports = module.exports = express()
  , app = exports;

// Local includes
var modTerminal = require('./terminal');

/** Global ROUTES **/
app.get('/', modTerminal.callbacks.terminal);

/** Testing setup **/
app.get('/testrunner', function(req, res) {
  res.sendFile(appRoot + '/testrunner.html')
});
app.get('/node_modules/mocha/mocha.css', function(req, res) {
  res.sendFile(appRoot + '/node_modules/mocha/mocha.css')
});
app.get('/node_modules/mocha/mocha.js', function(req, res) {
  res.sendFile(appRoot + '/node_modules/mocha/mocha.js')
});
app.get('/node_modules/chai/chai.js', function(req, res) {
  res.sendFile(appRoot + '/node_modules/chai/chai.js')
});
app.get('/node_modules/superagent/superagent.js', function(req, res) {
  res.sendFile(appRoot + '/node_modules/superagent/superagent.js')
});
// app.use(express.static(__dirname + '/../test'));
app.get('/test/acceptance/terminal_spec.js', function(req, res) {
  res.sendFile(appRoot + '/test/acceptance/terminal_spec.js')
});
