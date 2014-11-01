import Ember from 'ember';
import config from './config/environment';

// Add route class name on the body.
Ember.Route.reopen({
  activate: function() {
    var cssClass = this.toCssClass();

    if (cssClass !== 'application') {
      Ember.$('body').addClass(cssClass);
    }
  },
  deactivate: function() {
    Ember.$('body').removeClass(this.toCssClass());
  },
  toCssClass: function() {
    return this.routeName.replace(/\./g, '-').dasherize();
  }
});

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('activity');
  this.route('you');

  this.resource('following', function () {
    this.route('repos');
    this.route('users');
  });
});

export default Router;
