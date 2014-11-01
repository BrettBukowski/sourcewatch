import Ember from 'ember';

// Transitions back to the root if the user
// isn't authenticated.
export default Ember.Mixin.create({
  beforeModel: function (transition) {
    this._super(transition);

    if (!this.get('session').get('isAuthenticated')) {
      transition.abort();
      this.transitionTo('/');
    }
  }
});
