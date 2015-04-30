module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: ['../lib/*.js', './sample.test.js'],

    reporters: ['progress'],

    urlRoot : '/__karma__/',

    port: 8080,
    runnerPort: 9100,
    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    // 5 sec
    browserNoActivityTimeout: 5000
  });
};
