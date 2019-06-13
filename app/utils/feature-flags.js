const WELCOME = 'welcome';
const NEWS = 'news';

// Front End specific feature flags
export const FEATURES = {
  WELCOME,
  NEWS,
};

export const featuresFlags = {
  // this object will map the ENV flags into Front-end specific flags
  // this way we can split / merge ENV flags into different Front end flags

  [WELCOME]: false,
  [NEWS]: true,
};

export const featurePages = {
  'page-a': {
    features: [FEATURES.WELCOME], // list of feature that allow the page to be shown
    redirectRoute: { // Redirect route in case of FALSE feature flags
      routeName: "page-c",
    }
  },
  'page-b': {
    features: [FEATURES.NEWS],
    redirectRoute: {
      routeName: "page-c",
    }
  }
};

export function getRedirectRoute(routeName) {
  // this is a basic implementation that enable the page only if all the feature flags are TRUE
  // in case of redirect it return the redirectRoute object, otherwise it returns NULL

  // the actual redirect implementation logic needs to be defined

  const featurePage = featurePages[routeName];
  return featurePage && !featurePage.features.every(featureName => featuresFlags[featureName])
    ? featurePage.redirectRoute
    : null;
}
