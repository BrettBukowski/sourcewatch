/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/Ink/dist/css/ink-flex.css');
['eot', 'ttf', 'woff', 'svg'].forEach(function (ext) {
  app.import('bower_components/ionicons/fonts/ionicons.' + ext, {
    destDir: 'fonts'
  });
});
app.import('bower_components/moment/moment.js');
app.import('bower_components/twemoji/twemoji.js');
app.import('bower_components/uri-template.js/dist/uri-template.js');

var extraAssets = pickFiles('bower_components/Ink', {
    srcDir: '/dist/fonts/Roboto',
    files: ['**/*.woff', '**/*.ttf', '**/*.eot'],
    destDir: '/fonts/Roboto'
});

module.exports = app.toTree(extraAssets);
