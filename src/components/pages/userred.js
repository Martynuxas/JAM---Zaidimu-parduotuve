import React from 'react'
import '../styles/main.css';
import axios from 'axios'
import { Component } from 'react';

class userred extends Component {
	constructor(props)
	{
		super(props)
		this.state = {
			name:'',
			lastname:'',
			address:'',
			email:'',
			pastas:'',
			role:'',
			ERROR:''
		}
	}
	handleNameChange = (event) =>{
		this.setState({
			name: event.target.value
		})
	}
	handleLastNameChange = (event) =>{
		this.setState({
			lastname: event.target.value
		})
	}
	handleAddressChange = (event) =>{
		this.setState({
			address: event.target.value
		})
	}
	handleEmailChange = (event) =>{
		this.setState({
			email: event.target.value
		})
	}
	handlePastasChange = (event) =>{
		this.setState({
			pastas: event.target.value
		})
	}
	submit = event =>{
		let Name = this.state.name
		let LastName = this.state.lastname
		let Address = this.state.address
		let Email = this.state.email
		let Pastas = this.state.pastas

		const duomenys = {
			Name,
			LastName,
			Address,
			Email,
			Pastas
        };
        axios.patch('http://localhost:8000/account',  duomenys, {withCredentials: "true"}) 
       .then(response =>{
		   alert("Vartotojas redaguotas!");
		   return window.location.href = "/showUser";
		   
       })
       .catch(error => {
		   alert("Vartotojas nereadaguotas!");
	   })
	}
	render(){
    return ( 
<body>

<div class="banner">
		<div class="banner-dot">
		<div class="header-top">
			<div class="container">
				<div class="header-left">
					<h1><a href="mainPage">JAM  <h6>Žaidimų parduotuvė</h6></a></h1>
				</div>
				<div class="header-right">
					<div class="search">
						<form action="#" method="post">
							<input type="search" name="Search" placeholder="Paieška.." required=""/>
							<input type="submit" value=""/>
						</form>
					</div>
				</div>
                <div class="header-right-login">
                <a href="/" class="menu__link r-link text-underlined">Prisijungti</a>
                <a href="/registrationPage" class="menu__link r-link text-underlined">Registruotis</a>
				<div class="dropdown">
                <button class="dropbtn">Profilis</button>
                <div class="dropdown-content">
                    <a href="/userred">Redaguoti</a>
                    <a href="/showUser">Peržiurėti</a>
                    <a href="/krepselis">Krepšelis</a>
                    <a href="/norusar">Norų sąrašas</a>
					<a href="/vertinimai">Jūsų komentarai</a>
					<a href="/logout">Atsijungti</a>
                </div>
                </div>
                </div>
			</div>
		</div>
		<div class="header">
			<div class="container">		
				<nav class="navbar navbar-default">
                    <div class="page">
        <nav class="page__menu page__custom-settings menu">
            <ul class="menu__list r-list">
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Parduotuvė</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Playstation</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Xbox</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">PC</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Nintendo</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Auto modeliai</a></li>
            </ul>
            <div class="clearfix"> </div>	
        </nav>
    </div>
				</nav>
			</div>
		</div>
        <div class="banner-info">
		<div class="d-flex justify-content-center h-100">
				<div class="w3layouts-text">
                <form>
                    <h3 class="text-virsuj">Vartotojo [ Slapyvardis ] redagavimas</h3>
                        <h3 class="text-virsuj">Vardas</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Vardas" name="" class="form-control input_user" placeholder="Vardas" method="post" value={this.state.name} onChange={this.handleNameChange}/>
							</div>
						</div>
                        <h3 class="text-virsuj">Pavardė</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Pavarde" name="" class="form-control input_user" placeholder="Pavardė" value={this.state.lastname} onChange={this.handleLastNameChange}/>
							</div>
						</div>
                        <h3 class="text-virsuj">El. Paštas</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Email" name="" class="form-control input_user" placeholder="El. paštas" value={this.state.email} onChange={this.handleEmailChange} required/>
							</div>
						</div>
                        <h3 class="text-virsuj">Adresas</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Adresas" name="" class="form-control input_user" placeholder="Adresas" value={this.state.address} onChange={this.handleAddressChange}/>
							</div>
						</div>
                        <h3 class="text-virsuj">Pašto kodas</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Pastas" name="" class="form-control input_user" placeholder="Pašto kodas" value={this.state.pastas} onChange={this.handlePastasChange}/>
							</div>
						</div>
                        <h3 class="text-virsuj">Nuotrauka</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Nuotrauka" name="" class="form-control input_user" placeholder="Nuotraukos URL" required/>
							</div>
						</div>
                        <h3 class="text-virsuj">Tušti laukai nebus redaguoti!</h3>
							<div class="d-flex justify-content-center mt-3 login_container">
							<button onClick={this.submit} type="submit" name="button" class="btn login_btn">Redaguoti</button>
				   </div>
					</form>
				</div>           
            </div>
		</div>
        </div>
        </div>
        <div class="agileits-w3layouts-footer">
		<div class="container">
			<div class="agile-copyright">
				<p>Visos teisės saugomos © 2020 JAM. </p>
			</div>
		</div>
	</div>
</body>

		) 
	}
} 
export default userred;