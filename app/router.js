import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-a');
  this.route('page-b');
  this.route('page-c');
  this.route('page-d');
});

export default Router;
