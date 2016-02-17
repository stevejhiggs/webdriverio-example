var config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    capabilities: [{
        browserName: 'chrome'
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity.
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", the base url gets prepended.
    baseUrl: 'https://twitter.com',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 10000,
    framework: 'mocha',
    reporter: 'spec',
    mochaOpts: {
        ui: 'bdd'
    },
    //
    // Gets executed before test execution begins. At this point you will have access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function() {
      var chai = require('chai');
      var chaiAsPromised = require('chai-as-promised');

      chai.use(chaiAsPromised);
      expect = chai.expect;
      chai.Should();
    }
};

if (process.env.RUNONSAUCE) {
  config.user = 'your sauce name';
  config.key = 'your sauce key';
  config.host = 'ondemand.saucelabs.com';
  config.port = 80;
  config.capabilities = [
    {
      browserName: 'android',
      platform: 'Linux',
      version: '4.4',
      deviceName: 'Samsung Galaxy S3 Emulator',
      deviceOrientation: 'portrait',
      public: true,
      name: 's3 test'
    },
    {
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '9.0',
      public: true,
      name: 'mac test'
    }
  ];
}

exports.config = config;
