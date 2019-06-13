const WELCOME = 'welcome';
const NEWS = 'news';

export const FEATURES = {
  WELCOME,
  NEWS,
};

export const featuresFlags = {
  [WELCOME]: true,
  [NEWS]: false,
};

export const featuresRoutesConfig = {
  'page-a': {
    availableOnFeatures: [FEATURES.WELCOME],
    redirect: {
      route: "page-c",
    }
  },
  'page-b': {
    availableOnFeature: [FEATURES.NEWS],
    redirect: {
      route: "page-c",
    }
  }
};

// let's add one more property to see if it scales easily
export const customers = {
  customerA: true,
};

