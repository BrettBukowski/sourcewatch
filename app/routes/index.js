import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function (transition) {
    this._super(transition);

    this.get('session').fetch('github').then(Ember.run.bind(this, function () {
      transition.abort();
      this.transitionTo('/activity');
    }));
  },

  actions: {
    logIn: function () {
      this.get('session').open('github').then(Ember.run.bind(this, function () {
        this.transitionTo('/activity');
      }), Ember.run.bind(this, function (error) {
        this.controllerFor('index').set('error', 'Could not log you in: ' + error.message);
      }));
    }
  }
});
