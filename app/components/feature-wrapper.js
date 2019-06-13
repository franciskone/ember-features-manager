import Component from '@ember/component';
import { computed } from '@ember/object';
import { featuresFlags, customers} from 'ember-features-manager/utils/feature-flags';


export default Component.extend({
	shouldShow: computed('feature', 'customer', function() {
		const { feature, customer } = this.getProperties('feature', 'customer');
		return featuresFlags[feature] && customers[customer];
	})
});
