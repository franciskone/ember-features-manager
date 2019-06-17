import Controller from '@ember/controller';
import ENV from 'ember-features-manager/config/environment';
import { inject as service } from '@ember/service';

export default Controller.extend({
	featureFlags: service(),

	init(...args) {
		this._super(args);
		const {name, version, ...ENVS} = ENV.APP;

		this.appEnvs = Object
			.keys(ENVS)
			.map(key => ({flag: key, value: ENVS[key]}));
	}
});
