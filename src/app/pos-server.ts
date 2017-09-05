export class PosServer {
	country: string='AUS';
	company: string='';
	store: string='';
	name: string='';
	hostname: string='';
	instanceVersion: string='';
	dataset: string='';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
