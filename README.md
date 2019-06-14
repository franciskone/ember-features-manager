# Project related instructions

This is a test application to implement feature/platform driven app configuration.

#### config/environment.js
example
```
let ENV = {
    APP: {
        PLATFORM_CODE: process.env.PLATFORM_CODE || 'EARTH',
        FEATURE_NEWS: true
    }
};
```
in `ENV` you can set PLATFORM and FEATURES Envs.



#### app/utils/feature-flags.js
this file is used to implement your custom featureFlags management.

##### FEATURES
in `FEATURES` object you can add all the feature names you need.

example: 
```
const FEATURES = {
    WELCOME,
    NEWS,
};
```

##### featuresFlags
`featuresFlags` object maps the ENV flags into Front-end specific flags; this way we can split / merge ENV flags based on the application needs.

example: 
```
const featuresFlags = {
    [WELCOME]: Array('EARTH', 'MOON').includes(ENV.APP.PLATFORM_CODE),
    [NEWS]: ENV.APP.FEATURE_NEWS,
};
```

##### featurePages
In `featurePages` object you can add configurations for pages redirect.

example: 
```
const featurePages = {
  'page-a': {
    features: [FEATURES.WELCOME], // list of feature that allow the page to be shown
    redirectRoute: { // Redirect route in case of FALSE feature flags
      routeName: "page-c",
    }
  },
  'page-b': {
    features: [FEATURES.FEATURE_NEWS],
    redirectRoute: {
      routeName: "page-d",
    }
  }
};
```

for each property:

* `property key`: Use page names as key properties
* `features`: add an array of allowed features
* `redirectRoute`: add an object containing all the data needed to do a proper redirect














# Ember standard README.md
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-features-manager`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
