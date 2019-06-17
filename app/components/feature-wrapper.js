import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
	featureFlags: service(),

	tagName: '',
	features: null, // you can pass a single feature as a string or an array of features

	shouldShow: computed('features', function() {
		return this.featureFlags.shouldShowSection(this.get('features'));
	}),
});
