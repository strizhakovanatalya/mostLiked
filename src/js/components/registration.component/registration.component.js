import "./registration.scss";
import AuthService from "../../services/auth.service";

export default class RegistrationComponent {
	constructor() {
		this._authService = new AuthService();
	}
	render() {
		return `
        <div class="container registr">
		<h5 class="text-center text-uppercase">Sign up</h5>
		<form name="regForm" novalidate>
			<div class="form-row">
				<div class="form-group col-md-6">
					<input
						type="text"
						class="form-control"
						id="firstName"
						placeholder="First Name"
					/>
				</div>
				<div class="form-group col-md-6">
					<input
						type="text"
						class="form-control"
						id="lastName"
						placeholder="Last Name"
					/>
				</div>
			</div>
			<div class="form-group">
				<input
					type="text"
					class="form-control"
					id="nickName"
					placeholder="Nick Name"
				/>
			</div>
			<h6>Date of Birth</h6>
			<div class="form-row">
				<div class="form-group col-md-4">
					<select class="form-control" id="dayBirth">
						<option>Day</option>
						<option>30</option>
					</select>
				</div>
				<div class="form-group col-md-4">
					<select id="monthBirth" class="form-control">
						<option>Month</option>
						<option>06</option>
					</select>
				</div>
				<div class="form-group col-md-4">
					<select id="yearBirth" class="form-control">
						<option>Year</option>
						<option>1992</option>
					</select>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<select id="countryBirth" class="form-control">
						<option>Country</option>
						<option>Ukraine</option>
					</select>
				</div>
				<div class="form-group col-md-6">
					<select id="cityBirth" class="form-control">
						<option>City</option>
						<option>Kharkiv</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<select id="gender" class="form-control">
					<option>Gender</option>
					<option>Female</option>
				</select>
			</div>
			<div class="form-group">
				<input
					type="email"
					class="form-control"
					id="emailAddress"
					placeholder="Email address"
				/>
			</div>
			<div class="form-group">
				<input
					type="tel"
					class="form-control"
					id="phoneNumber"
					placeholder="Phone number"
				/>
			</div>
			<div class="form-group">
				<input
					type="password"
					class="form-control"
					id="password"
					placeholder="Password"
				/>
			</div>
			<div class="form-group">
				<input
					type="password"
					class="form-control"
					id="repeatPassword"
					placeholder="Repeat password"
				/>
			</div>
            <div class="text-center">
				<button type="submit" id="signUp" class="btn btn-primary text-uppercase">
					Sign up
				</button>
			</div>
			
		</form>
		</div> 
        `;
	}
	afterRender() {
		document.forms["regForm"].addEventListener("submit", e => {
			e.preventDefault();
			const first_name = e.target.elements["firstName"].value;
			const last_name = e.target.elements["lastName"].value;
			const nickname = e.target.elements["nickName"].value;
			const date_of_birth_day = e.target.elements["dayBirth"].value;
			const date_of_birth_month = e.target.elements["monthBirth"].value;
			const date_of_birth_year = e.target.elements["yearBirth"].value;
			const country = e.target.elements["countryBirth"].value;
			const city = e.target.elements["cityBirth"].value;
			const email = e.target.elements["emailAddress"].value;
			const phone = e.target.elements["phoneNumber"].value;
			const password = e.target.elements["password"].value;
			const repeatPassword = e.target.elements["repeatPassword"].value;
			const gender_orientation = e.target.elements["gender"].value;
			if (
				!first_name ||
				!last_name ||
				!nickname ||
				!date_of_birth_day ||
				!date_of_birth_month ||
				!date_of_birth_year ||
				!country ||
				!city ||
				!email ||
				!phone ||
				!password ||
				!repeatPassword ||
				!gender_orientation
			) {
				return alert("Заполните все поля");
			}
			if (password !== repeatPassword) {
				return alert("Пароли не совпадают");
			}
			this._authService
				.registration(
					email,
					password,
					nickname,
					first_name,
					last_name,
					phone,
					gender_orientation,
					city,
					country,
					date_of_birth_day,
					date_of_birth_month,
					date_of_birth_year
				)
				.then(response => {
					alert(response.message);
					console.log(response);
				})
				.catch(response => {
					console.log(response);
				});
		});
	}
}
