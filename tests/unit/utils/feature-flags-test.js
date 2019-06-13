import featureFlags from 'ember-features-manager/utils/feature-flags';
import { module, test } from 'qunit';

module('Unit | Utility | feature-flags', function() {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = featureFlags();
    assert.ok(result);
  });
});
