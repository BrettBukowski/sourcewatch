import Ember from 'ember';
import ProtectedRouteMixin from 'sourcewatch/mixins/protected-route';

module('ProtectedRouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var ProtectedRouteObject = Ember.Object.extend(ProtectedRouteMixin);
  var subject = ProtectedRouteObject.create();
  ok(subject);
});
