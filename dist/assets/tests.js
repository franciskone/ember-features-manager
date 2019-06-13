'use strict';

define("ember-features-manager/tests/integration/components/feature-wrapper-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | feature-wrapper', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ByN5+hRd",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"feature-wrapper\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9vwJpD3G",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"feature-wrapper\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-features-manager/tests/lint/app.lint-test", [], function () {
  "use strict";
});
define("ember-features-manager/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-features-manager/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-features-manager/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-features-manager/templates/components/feature-wrapper.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-features-manager/templates/components/feature-wrapper.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-features-manager/templates/page-a.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-features-manager/templates/page-a.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-features-manager/templates/page-b.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-features-manager/templates/page-b.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-features-manager/templates/page-c.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-features-manager/templates/page-c.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-features-manager/tests/lint/tests.lint-test", [], function () {
  "use strict";
});
define("ember-features-manager/tests/test-helper", ["ember-features-manager/app", "ember-features-manager/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-features-manager/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("ember-features-manager/tests/unit/routes/page-a-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | page-a', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:page-a');
      assert.ok(route);
    });
  });
});
define("ember-features-manager/tests/unit/routes/page-b-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | page-b', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:page-b');
      assert.ok(route);
    });
  });
});
define("ember-features-manager/tests/unit/routes/page-c-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | page-c', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:page-c');
      assert.ok(route);
    });
  });
});
define("ember-features-manager/tests/unit/utils/feature-flags-test", ["ember-features-manager/utils/feature-flags", "qunit"], function (_featureFlags, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | feature-flags', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _featureFlags.default)();
      assert.ok(result);
    });
  });
});
define('ember-features-manager/config/environment', [], function() {
  var prefix = 'ember-features-manager';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-features-manager/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
