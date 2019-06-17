import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	featureFlags: service(),

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
		const redirectRoute = this.featureFlags.getRedirectRoute(newRouteName);
		redirectRoute && this.transitionTo(redirectRoute.routeName);
	}
});
