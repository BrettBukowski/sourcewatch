import Ember from 'ember';
import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  model: function () {
    return Ember.$.getJSON(this.get('session').get('currentUser').events_url.replace(/\{.*\}/, ''));
  }
});
