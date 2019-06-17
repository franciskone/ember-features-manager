export function initialize(application) {
  application.inject('controller', 'featureFlags', 'service:feature-flags');
  application.inject('component', 'featureFlags', 'service:feature-flags');
}

export default {
  initialize
};
