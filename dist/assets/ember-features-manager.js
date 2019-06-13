'use strict';



;define("ember-features-manager/app", ["exports", "ember-features-manager/resolver", "ember-load-initializers", "ember-features-manager/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("ember-features-manager/components/feature-wrapper", ["exports", "ember-features-manager/utils/feature-flags"], function (_exports, _featureFlags) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    shouldShow: Ember.computed('feature', 'customer', function () {
      const {
        feature,
        customer
      } = this.getProperties('feature', 'customer');
      return _featureFlags.featuresFlags[feature] && _featureFlags.customers[customer];
    })
  });

  _exports.default = _default;
});
;define("ember-features-manager/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-features-manager/helpers/app-version", ["exports", "ember-features-manager/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-features-manager/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-features-manager/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-features-manager/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-features-manager/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-features-manager/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-features-manager/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-features-manager/initializers/export-application-global", ["exports", "ember-features-manager/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-features-manager/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("ember-features-manager/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ember-features-manager/router", ["exports", "ember-features-manager/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('page-a');
    this.route('page-b');
    this.route('page-c');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("ember-features-manager/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({// actions: {
    //   willTransition(transition) {
    //     redirections[transition.from.name].feature
    //     if (this.controller.get('userHasEnteredData')) {
    //       this.controller.displayNavigationConfirm();
    //       transition.abort();
    //     }
    //   }
    // }
  });

  _exports.default = _default;
});
;define("ember-features-manager/routes/page-a", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("ember-features-manager/routes/page-b", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("ember-features-manager/routes/page-c", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("ember-features-manager/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("ember-features-manager/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "SDaEVBBP",
    "block": "{\"symbols\":[],\"statements\":[[5,\"feature-wrapper\",[],[[\"@feature\",\"@customer\"],[\"welcome\",\"customerA\"]],{\"statements\":[[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"Welcome to \"],[1,[21,\"appName\"],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\\n\"],[5,\"feature-wrapper\",[],[[\"@feature\"],[\"news\"]],{\"statements\":[[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"News 1\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"News 2\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"News 3\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\\n\"],[4,\"link-to\",[\"page-a\"],null,{\"statements\":[[0,\"    Page A\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"page-b\"],null,{\"statements\":[[0,\"    Page B\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"page-c\"],null,{\"statements\":[[0,\"    Page C\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-features-manager/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-features-manager/templates/components/feature-wrapper", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WvyeyNLm",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"shouldShow\"]]],null,{\"statements\":[[0,\"    \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-features-manager/templates/components/feature-wrapper.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-features-manager/templates/page-a", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZuwvLh0p",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[9],[0,\"Page A\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-features-manager/templates/page-a.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-features-manager/templates/page-b", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rog2ofNA",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[9],[0,\"Page B\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-features-manager/templates/page-b.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-features-manager/templates/page-c", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WPfx8ruh",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[9],[0,\"Page C\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-features-manager/templates/page-c.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-features-manager/utils/feature-flags", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.customers = _exports.featuresFlags = _exports.FEATURES = void 0;
  const WELCOME = 'welcome';
  const NEWS = 'news';
  const FEATURES = {
    WELCOME,
    NEWS
  };
  _exports.FEATURES = FEATURES;
  const featuresFlags = {
    [WELCOME]: true,
    [NEWS]: false
  }; // let's add one more property to see if it scales easily

  _exports.featuresFlags = featuresFlags;
  const customers = {
    customerA: true
  };
  _exports.customers = customers;
});
;

;define('ember-features-manager/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ember-features-manager/app")["default"].create({"name":"ember-features-manager","version":"0.0.0+021b87ca"});
          }
        
//# sourceMappingURL=ember-features-manager.map
