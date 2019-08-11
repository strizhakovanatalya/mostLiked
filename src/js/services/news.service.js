import Http from "../core/http.service";
import { ENV } from "../config/env";

export default class NewsService {
	getNews(userToken) {
		const http = new Http();
		return new Promise((resolve, reject) => {
			http.get(`${ENV.apiUrl}/public/news`, {
				method: "GET",
				headers: {
					"x-access-token": `${userToken}`
				}
			})
				.then(resp => {
					console.log(resp);
					resolve(resp);
				})
				.catch(error => {
					console.error(error);
					reject(error);
				});
		});
	}
}
