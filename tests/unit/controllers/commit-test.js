import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:commit', 'CommitController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});


test('commitUrl computed property', function() {
  var controller = this.subject();
  controller.set('url', 'https://api.github.com/repos/username/repo/commits/hash');
  equal('https://github.com/username/repo/commit/hash', controller.get('commitUrl'));
});
