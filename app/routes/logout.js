import Ember from 'ember';
import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  beforeModel: function (transition) {
    this._super(transition);

    this.get('session').close('github').then(Ember.run.bind(this, this.transitionTo, '/'));
  }
});
