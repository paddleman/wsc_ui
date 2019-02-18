import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | stations', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('stations', {});
    assert.ok(model);
  });
});
