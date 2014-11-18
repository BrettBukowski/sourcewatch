import Ember from 'ember';
import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model: function () {
    return Ember.$.getJSON(this.get('session').get('currentUser').starred_url.replace(/\{.*\}/g, ''));
  }
});
