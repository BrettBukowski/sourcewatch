/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sourcewatch',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      // 'torii': {
      //   sessionServiceName: 'session',
      //   providers: {
      //     github: {
      //       appId: 'c9dd00604e926b24dc9c',
      //       // authBaseUri: 'https://github.com/login/oauth/authorize',
      //       // redirectUri: 'http://localhost:4200/callback', // Server-side route
      //       scope: 'repo'
      //     }
      //   }
      // }
    },
    'torii': {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          redirectUri: 'http://localhost:4200/redirect',
          appId: 'c9dd00604e926b24dc9c',
          apiKey: 'c9dd00604e926b24dc9c',
          // authBaseUri: 'https://github.com/login/oauth/authorize',
          // redirectUri: 'http://localhost:4200/callback', // Server-side route
          scope: 'repo'
        }
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
