import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function (transition) {
    this._super(transition);
    this.get('session').fetch('github');
  }
});
