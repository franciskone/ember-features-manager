import Controller from '@ember/controller';
import ENV from 'ember-features-manager/config/environment';

export default Controller.extend({
	init(...args) {
		this._super(args);
		const {name, version, ...ENVS} = ENV.APP;

		this.appEnvs = Object
			.keys(ENVS)
			.map(key => ({flag: key, value: ENVS[key]}));
	}
});
