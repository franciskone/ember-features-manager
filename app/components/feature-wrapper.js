import Component from '@ember/component';
import { computed } from '@ember/object';
import { featuresFlags } from 'ember-features-manager/utils/feature-flags';


export default Component.extend({
	tagName: '',

	shouldShow: computed('feature', function() {
		// TODO implement the option to pass a single feature or an array of features
		return featuresFlags[this.get('feature')];
	})
});
