import Route from '@ember/routing/route';
import { getRedirectRoute } from 'ember-features-manager/utils/feature-flags';

export default Route.extend({
	beforeModel(transition) {
		this._redirectOnMissingFeatures(transition);
	},

	actions: {
	  willTransition(transition) {
	  	this._redirectOnMissingFeatures(transition);
	  }
	},

	_redirectOnMissingFeatures(transition) {
		const newRouteName = transition.to.name;
		const redirectRoute = getRedirectRoute(newRouteName);
		redirectRoute && this.transitionTo(redirectRoute.routeName);
	}
});
