import axios from 'axios';
import qs from 'qs';



const CLIENT_ID = '9323608ffcce8d1';
const ROOT_URL = 'https://api.imgur.com';

export default {
	login() {
		const querystring = {
			client_id: CLIENT_ID,
			response_type: 'token'
		};

		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
	},
	fetchImages(token) {
		return axios.get(`${ROOT_URL}/3/account/me/images`,{
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	},
	uploadImages(images, token) {
		const promises = Array.from(images).map((el) => {
			const formData = new FormData();
			formData.append('image', el);

			return axios.post(`${ROOT_URL}/3/image`, formData, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
		});

		return Promise.all(promises);
	}
};

//Client secret: 91b08fb5a78fe351aac680c78904f65a2eed6911

/* https://api.imgur.com/oauth2/authorize?
client_id=YOUR_CLIENT_ID
&response_type=token
&state=APPLICATION_STATE */