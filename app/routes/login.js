import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    logIn: function () {
      this.get('session').open('github-oauth2').then(Ember.run.bind(this, function () {
        this.transitionTo('/');
      }), Ember.run.bind(this, function (error) {
        this.controllerFor('login').set('error', 'Could not log you in: ' + error.message);
      }));
    }
  }
});
