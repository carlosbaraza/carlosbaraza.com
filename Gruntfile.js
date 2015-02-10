module.exports = function(grunt) {

  var port = 8888;

  // Client-side tests with Phantom.js
  grunt.loadNpmTasks('grunt-mocha');

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  // Connect to start the server
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: port,
          base: '.',
        },
      },
    },

    // Client side
    mocha: {
      test: {
        options: {
          urls: ['http://localhost:' + port + '/testrunner.html'],
          run: true,
          log: true,
          logErrors: true
        }
      }
    },

    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('default', ['connect', 'mocha']);

};
