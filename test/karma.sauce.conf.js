module.exports = function(config) {
  var customLaunchers = {
    sl_safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.6',
      version: '5'
    },
    sl_ie_9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9'
    }
  };

  config.set({
    basePath: '',

    frameworks: ['ng-scenario'],

    files: ['./scenario.test.js'],

    reporters: ['saucelabs'],

    urlRoot : '/__karma__/',

    proxies : {
      '/': 'http://localhost:3000'
    },

    port: 8080,
    runnerPort: 9100,
    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    // Use these custom launchers for starting browsers on Sauce
    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),

    singleRun: true,

    // 45 sec
    browserNoActivityTimeout: 45000,

    sauceLabs: {
      testName: 'Web App E2E Tests'
    },
  });
};