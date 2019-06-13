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

// let's add one more property to see if it scales easily
export const customers = {
  customerA: true,
};