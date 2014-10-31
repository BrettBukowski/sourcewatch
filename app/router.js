import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('login');
  this.route('activity');
  this.route('you');

  this.resource('following', function () {
    this.route('repos');
    this.route('users');
  });
});

export default Router;
