import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('following', 'Following', {
  needs: ['model:user', 'model:repo']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
