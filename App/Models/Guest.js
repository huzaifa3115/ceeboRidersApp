import Base from './Base';
import config from '../../config';

export class Guest extends Base {

	static login(email, password) {
		
		let params = {
			email: email, 
			password: password,
		};
		return Guest.request(config.siteUrl + 'signin', 'POST', params);
	}

	static forgetPassword(params){
		return Guest.request(config.siteUrl + 'forgot_password', 'POST', params );	
	}

}