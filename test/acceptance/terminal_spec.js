// var superagent = require("superagent");

// Ugly helper for asynchronous tests
function check( done, f ) {
  try {
    f()
    done()
  } catch( e ) {
    done( e )
  }
}

describe('Terminal', function() {
  it('loads the index page', function(done) {
    superagent.get('http://localhost:3000/')
              .end(function(data, textStatus, xhr) {
      check(done, function() {
        expect(data.status).to.equal(200);
      });
    });
  });
});
