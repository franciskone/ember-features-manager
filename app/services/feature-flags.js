import Service from '@ember/service';
import ENV from 'ember-features-manager/config/environment';

const WELCOME = 'welcome';
const NEWS = 'news';

export default Service.extend({
  init(...args) {
    this._super(...args);

    // Front End specific feature flags
    this.FEATURES = {
      WELCOME,
      NEWS,
    };

    this.featuresFlags = {
      // this object will map the ENV flags into Front-end specific flags
      // this way we can split / merge ENV flags into different Front end flags

      [WELCOME]: Array('EARTH', 'MOON').includes(ENV.APP.PLATFORM_CODE),
      [NEWS]: ENV.APP.FEATURE_NEWS,
    };

    this.featurePages = {
      'page-a': {
        features: [this.FEATURES.WELCOME], // list of feature that allow the page to be shown
        redirectRoute: { // Redirect route in case of FALSE feature flags
          routeName: "page-c",
        }
      },
      'page-b': {
        features: [this.FEATURES.NEWS],
        redirectRoute: {
          routeName: "page-d",
        }
      }
    }
  },

  getRedirectRoute(routeName) {
    // this is a basic implementation that enable the page if at least one of the feature flags is TRUE
    // in case of redirect it returns the redirectRoute object, otherwise it returns NULL

    // !!! THE ACTUAL REDIRECT IMPLEMENTATION LOGIC NEEDS TO BE DEFINED !!!

    const featurePage = this.featurePages[routeName];
    return featurePage && !featurePage.features.some(featureName => this.featuresFlags[featureName])
      ? featurePage.redirectRoute
      : null;
  },

  shouldShowSection(features) {
    return Array.isArray(features)
      ? features.some(feature => this.featuresFlags[feature])
      : this.featuresFlags[features];
  }
});
