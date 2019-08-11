import "./home.scss";
import Routing from "./../../core/routing.service";
export default class HomeComponent {
	constructor() {
		this._routing = new Routing();
	}
	render() {
		return `<div class="home"> 
				    <h3>Home</h3>
		            <button type="button" class="btn btn-success" id="login-btn">Login</button>
					<button type="button" class="btn btn-success" id="reg-btn">Registration</button>
		        </div>`;
	}
	afterRender() {
		let button = document.getElementById("login-btn");
		button.addEventListener("click", () => {
			this._routing.navigate("/login");
		});
		let regButton = document.getElementById("reg-btn");
		regButton.addEventListener("click", () => {
			this._routing.navigate("/registration");
		});
	}
}
