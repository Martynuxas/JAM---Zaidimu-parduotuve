import { Component } from 'react';
import React from "react";
import '../styles/App.css';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import registrationPage from './register.js';
import mainPage from './main.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import pswreset from '../pages/pswreset';
import prekesred from '../pages/prekesred';
import prekesadd from '../pages/prekesadd';
import showUser from '../pages/showUser';
import userred from '../pages/userred';
import norusar from '../pages/norusar';
import krepselis from '../pages/krepselis';
import sekejusar from '../pages/sekejusar';
import sekamusar from '../pages/sekamusar';
import keistipw from '../pages/keistipw';
import showProduct from '../pages/showProduct';
import vertinimai from '../pages/vertinimai';
import logout from '../pages/logout';
import axios from 'axios'
import vartotojuSarasas from '../pages/vartotojuSarasas';
import vertinimuRed from '../pages/vertinimuRed';

class App extends Component {
	constructor(props)
	{
		super(props)
		this.state = {
			cookie:'',
			email:'',
			pw:'',
			priceFrom:'',
			priceTo:'',
			creator:'',
			category:''
		}
	}
	handleEmailChange = (event) =>{
		this.setState({
			email: event.target.value
		})
	}
	handlePwChange = (event) =>{
		this.setState({
			pw: event.target.value
		})
	}

	submit = event =>{
		let Email = this.state.email
		let Password = this.state.pw
		const duomenys = {
			Email,
			Password
        };

		axios.post('http://localhost:8000/login',  duomenys,{withCredentials: "true"})
		  .then(response =>{
			alert("Prisijungėte!");
			return window.location.href = "/mainPage";
			  
	   })
       .catch(error => {
		alert("Nepavyko prisijungti!");
	   })
	}
  render() {
      return (
		
<Router>
    <Switch>
    <Route path="/registrationPage" component={registrationPage}/>
	<Route path="/mainPage" component={mainPage}/>
	<Route path="/pswreset" component={pswreset}/>
	<Route path="/prekesred" component={prekesred}/>
	<Route path="/prekesadd" component={prekesadd}/>
	<Route path="/showUser" render={showUser}/>
	<Route path="/userred" component={userred}/>
	<Route path="/keistipw" component={keistipw}/>
	<Route path="/showProduct" component={showProduct}/>
	<Route path="/vartotojai" component={vartotojuSarasas}/>
	<Route path="/vertinimured" component={vertinimuRed}/>
	<Route path="/logout" component={logout}/>
	<Route path="/norusar" render={norusar}/>
	<Route path="/vertinimai" render={vertinimai}/>
	<Route path="/krepselis" render={krepselis}/>
	<Route path="/sekejusar" render={sekejusar}/>
	<Route path="/sekamusar" render={sekamusar}/>
    <body>
        <div>
			<a href="/mainPage"><button type="button" name="button" class="toshop">Grįžti į parduotuvę</button>
	</a>
		</div>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
                
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src={logo} class="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
                    <h3 class="text-virsuj">Prisijungimas</h3>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" placeholder="El.paštas" value={this.state.email} onChange={this.handleEmailChange}/>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" placeholder="Slaptažodis" value={this.state.pw} onChange={this.handlePwChange}/>
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline"/>
								<label class="custom-control-label" for="customControlInline">Prisiminti</label>
							</div>
					
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
							<button onClick={this.submit} type="button" name="button" class="btn login_btn">Prisijungti</button>
				   </div>
					</form>
				</div>
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
					<a href="/registrationPage"><button type="button" name="button" class="btn login_btn">Registruotis</button></a>
					<a href="/pswreset"><button type="button" name="button" class="btn login_btn">Pamiršai slaptažodį?</button></a>
					</div>
				</div>
			</div>
		</div>
	</div>
    </body>
    </Switch>
    </Router>
      );
  }
}

export default App;
