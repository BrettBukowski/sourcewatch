import Ember from 'ember';
import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model: function () {
    return Ember.$.getJSON(UriTemplate.expand(this.get('session').get('currentUser').following_url));
  }
});
