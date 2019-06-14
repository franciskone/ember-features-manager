import Component from '@ember/component';
import { computed } from '@ember/object';
import { shouldShowSection } from 'ember-features-manager/utils/feature-flags';

export default Component.extend({
	tagName: '',
	features: null, // you can pass a single feature as a string or an array of features

	shouldShow: computed('features', function() {
		return shouldShowSection(this.get('features'));
	}),
});
