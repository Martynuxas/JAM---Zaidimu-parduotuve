import '../styles/App.css';
import logo from '../images/logo.png';
import axios from 'axios';
import React, { Component } from 'react';

class register extends Component {
	
	constructor(props)
	{
		super(props)
		this.state = {
			email:'',
			pw:'',
			pw2:'',
			ERROR:''
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
	handlePw2Change = (event) =>{
		this.setState({
			pw2: event.target.value
		})
	}
	submit = event =>{
		let Email = this.state.email
		let Password = this.state.pw
		let RepeatPassword = this.state.pw2
		const duomenys = {
			Email,
			Password,
			RepeatPassword
        };

        axios.post('http://localhost:8000/account',  duomenys  ) 
       .then(response =>{
		alert("Pavyko užsiregistruoti!");
		return window.location.href = "/";
        
       })
       .catch(error => {
		alert("Nepavyko užsiregistruoti!");
	   })
	   
	}
	render(){
      return (
<body>
        <div>
		<a href="/mainPage">
    <button type="button" name="button" class="toshop">Grįžti į parduotuvę</button>
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
                    <h3 class="text-virsuj">Registracija</h3>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-envelope"></i></span>
							</div>
							<input type="email" name="email" class="form-control input_user" placeholder="El. paštas" value={this.state.email} onChange={this.handleEmailChange}/>
						</div>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="pw" class="form-control input_pass" placeholder="Slaptažodis" value={this.state.pw} onChange={this.handlePwChange}/>
						</div>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="pw2" class="form-control input_pass" placeholder="Pakartokite slaptažodį" value={this.state.pw2} onChange={this.handlePw2Change}/>
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline"/>
								<label class="custom-control-label" for="customControlInline">Sutinku su taisyklėmis</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
							
							<button onClick={this.submit} type="button" name="button" class="btn login_btn">Registruotis</button>
				   </div>
					</form>
				</div>
			</div>
		</div>
	</div>
    </body>
		);
	  }
    }
  
  export default register;