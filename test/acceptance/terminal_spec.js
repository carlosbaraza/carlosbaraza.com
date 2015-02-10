// var superagent = require("superagent");

describe('Terminal', function() {
  it('loads the index page', function() {
    superagent.get('http://localhost:3000/')
              .end(function(data, textStatus, xhr) {
      expect(data.status).to.equal(200);
    });
  });
});
