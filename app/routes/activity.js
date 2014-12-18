import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  model: function () {
    return Ember.$.getJSON(UriTemplate.expand(this.get('session').get('currentUser').received_events_url));
  }
});
