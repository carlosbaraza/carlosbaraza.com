var exports = module.exports;

exports.terminal = function(req, res) {
  var context = {
    siteTitle: "Carlos Baraza"
  };

  var template = __dirname + '/../views/terminal';
  res.render(template, context);
};