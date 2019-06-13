import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | page-c', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:page-c');
    assert.ok(route);
  });
});
