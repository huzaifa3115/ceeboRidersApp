import Base from './Base';
import config from '../../config';

export class Orders extends Base {

	static orders() {
		return Orders.request(config.siteUrl + 'orders', 'GET', {});
	}

}