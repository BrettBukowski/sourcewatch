import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:user', 'UserController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('userUrl computed property', function() {
  var controller = this.subject();
  controller.set('url', 'https://api.github.com/users/username');
  equal('https://github.com/username', controller.get('userUrl'));
});
