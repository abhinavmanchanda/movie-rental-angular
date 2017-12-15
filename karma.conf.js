//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'app/**/*.module.js',
      'app/**/*!(.module|.spec).js',
      'test/**/*.spec.js'
    ],

    preprocessors: {
      'app/**/*.js': ['coverage']
    },
    autoWatch: true,

    reporters: ['coverage'],
    coverageReporter: {type:'html', dir: 'coverage/'},

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage'
    ]

  });
};
