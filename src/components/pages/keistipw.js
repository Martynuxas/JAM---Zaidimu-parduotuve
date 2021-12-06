import React from 'react'
import '../styles/main.css';
import axios from 'axios'
import { Component } from 'react';

class keistipw extends Component {
	constructor(props)
	{
		super(props)
		this.state = {
			pw:'',
			npw:'',
			npwr:''
		}
	}
	handlePwChange = (event) =>{
		this.setState({
			pw: event.target.value
		})
	}
	handleNpwChange = (event) =>{
		this.setState({
			npw: event.target.value
		})
	}
	handleNpwrChange = (event) =>{
		this.setState({
			npwr: event.target.value
		})
	}
	submit = event =>{
		let Password = this.state.pw
		let newPassword = this.state.npw
		let newPasswordRepeat = this.state.npwr

		const duomenys = {
			Password,
			newPassword,
			newPasswordRepeat
        };
        console.log(duomenys)
        axios.patch('http://localhost:8000/login',  duomenys, {withCredentials: "true"}) 
       .then(response =>{
		   alert("Slaptažodis pakeistas!");
		   return window.location.href = "/mainPage";
       })
       .catch(error => {
		   alert("Slaptažodis nepakeistas");
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
                    <h3 class="text-virsuj">Vartotojo slaptažodžio keitimas</h3>
                        <h3 class="text-virsuj">Slaptažodis</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="password" name="" class="form-control input_user" placeholder="slaptažodis" value={this.state.pw} onChange={this.handlePwChange} required/>
							</div>
						</div>
                        <h3 class="text-virsuj">Naujas slaptažodis</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="password" name="" class="form-control input_user" placeholder="naujas slaptažodis" value={this.state.npw} onChange={this.handleNpwChange} required/>
							</div>
						</div>
                        <h3 class="text-virsuj">Pakartokite naują slaptažodį</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="password" name="" class="form-control input_user" placeholder="pakartokite slaptažodį" value={this.state.npwr} onChange={this.handleNpwrChange} required/>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
							<button onClick={this.submit} type="submit" name="button" class="btn login_btn">Keisti</button>
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
export default keistipw;