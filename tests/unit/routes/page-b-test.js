import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | page-b', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:page-b');
    assert.ok(route);
  });
});
