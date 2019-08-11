export default class Http {
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-type": "application/json"
				}
			})
				.then(response => response.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}
	get(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, data)
				.then(response => response.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}
}
