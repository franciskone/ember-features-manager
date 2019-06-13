import Route from '@ember/routing/route';
import { redirections } from 'ember-features-manager/utils/feature-flags';

export default Route.extend({
	// actions: {
	//   willTransition(transition) {
	//     redirections[transition.from.name].feature
	//     if (this.controller.get('userHasEnteredData')) {
	//       this.controller.displayNavigationConfirm();
	//       transition.abort();
	//     }
	//   }
	// }
});
