import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('repo', 'Repo', {
  needs: ['model:user']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
