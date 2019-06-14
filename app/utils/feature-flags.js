import ENV from 'ember-features-manager/config/environment';

const WELCOME = 'welcome';
const NEWS = 'news';

// Front End specific feature flags
const FEATURES = {
  WELCOME,
  NEWS,
};
export default FEATURES;

export const featuresFlags = {
  // this object will map the ENV flags into Front-end specific flags
  // this way we can split / merge ENV flags into different Front end flags

  [WELCOME]: Array('EARTH', 'MOON').includes(ENV.APP.PLATFORM_CODE),
  [NEWS]: ENV.APP.FEATURE_NEWS,
};

export const featurePages = {
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

export function getRedirectRoute(routeName) {
  // this is a basic implementation that enable the page if at least one of the feature flags is TRUE
  // in case of redirect it returns the redirectRoute object, otherwise it returns NULL

  // !!! THE ACTUAL REDIRECT IMPLEMENTATION LOGIC NEEDS TO BE DEFINED !!!

  const featurePage = featurePages[routeName];
  return featurePage && !featurePage.features.some(featureName => featuresFlags[featureName])
    ? featurePage.redirectRoute
    : null;
}

export function shouldShowSection(features) {
  return Array.isArray(features)
    ? features.some(feature => featuresFlags[feature])
    : featuresFlags[features];
}
