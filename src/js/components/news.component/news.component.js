import "./news.component.scss";
import NewsService from "./../../services/news.service";
import AuthService from "./../../services/auth.service";

export default class NewsComponent {
	constructor() {
		this.newsService = new NewsService();
		this.authService = new AuthService();
		this.userToken = this.authService.token;
	}
	async beforeRender() {
		this.newsResponse = await this.newsService.getNews(this.userToken);
	}
	getPictures() {
		let fragment = document.createDocumentFragment();
		for (let newItem of this.newsResponse.news) {
			for (let picture of newItem.pictures) {
				fragment.appendChild(this.getPicture(picture));
			}
		}
		console.log(typeof fragment);
		return fragment;
	}
	getPicture(picture) {
		let col = document.createElement("div");
		col.classList.add("col-sm-4", "mt-2");
		let img = document.createElement("img");
		img.src = picture.url;
		img.alt = "";
		col.appendChild(img);
		return col;
	}
	render() {
		return `
        <div class="container">
            <div class="row" id="pics-container">
        </div>`;
	}
	afterRender() {
		this.picsContainer = document.getElementById("pics-container");
		this.picsContainer.appendChild(this.getPictures());
	}
}
