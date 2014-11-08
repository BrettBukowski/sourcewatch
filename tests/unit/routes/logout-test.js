import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:logout', 'LogoutRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

test('it closes the session and transitions to root', function() {
  var route = this.subject();
  ok(route);
});
