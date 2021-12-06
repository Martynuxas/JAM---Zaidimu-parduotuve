import React from 'react'
import '../styles/main.css';
import axios from 'axios'
import { Component } from 'react';

class prekesadd extends Component {
	constructor(props)
	{
		super(props)
		this.state = {
			email:'',
			pw:'',
			ERROR:''
		}
	}
	handleNameChange = (event) =>{
		this.setState({
			name: event.target.value
		})
	}
	handleDescriptionChange = (event) =>{
		this.setState({
			description: event.target.value
		})
	}
	handlePriceChange = (event) =>{
		this.setState({
			price: event.target.value
		})
	}
	handleCategoryChange = (event) =>{
		this.setState({
			category: event.target.value
		})
	}
	submit = event =>{
		let name = this.state.name
		let description = this.state.description
		let price = parseFloat(this.state.price)
		let category = this.state.category

		const duomenys = {
			name,
			description,
			price,
			category
        };
        axios.post('http://localhost:8000/games', duomenys, {withCredentials: "true"}) 
       .then(response =>{
		   alert("Prekė pridėta!");
        
       })
       .catch(error => {
		   alert("Prekė nepridėta!");
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
                    <h3 class="text-virsuj">Prekės pridėjimas</h3>
                    <h3 class="text-virsuj">Pavadinimas</h3>
						<div class="input-group mb-3">
                            
							<div class="input-group-append">
                                
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="pavadinimas" name="" class="form-control input_user" placeholder="Pavadinimas" value={this.state.name} onChange={this.handleNameChange} required />
							</div>
						</div>
                        <h3 class="text-virsuj">Aprašymas</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <textarea type="aprasymas" placeholder="Aprašymas" cols="25" rows="8" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
							</div>
						</div>
                        <h3 class="text-virsuj">Kaina</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Kaina" name="" class="form-control input_user" placeholder="Kaina" value={this.state.price} onChange={this.handlePriceChange} required/>
							</div>
						</div>
                        <h3 class="text-virsuj">Kategorija</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <select class="form-control" id = "pasirinkimas" onChange={this.handleCategoryChange} value={this.state.category}>
                                <option selected disabled value="">-------Pasirinkite------</option>
                                    <option value="Veiksmo">Veiksmo </option>
                                    <option value="Lenktynių">Lenktynių</option>
									<option value="Strateginis">Strateginis</option>
									<option value="MMORPG">MMORPG</option>
									<option value="Naršyklinis">Naršyklinis</option>
									<option value="Karo">Karo</option>
									<option value="Indie">Indie</option>
									<option value="Nuotykių">Nuotykių</option>
                                    </select>     
							</div>
						</div>    
                        <h3 class="text-virsuj">Nuotrauka</h3>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-edit"></i></span>
                                <input type="Nuotrauka" name="" class="form-control input_user" placeholder="Nuotraukos URL" required/>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
							<button onClick={this.submit} type="button" name="button" class="btn login_btn">Pridėti</button>
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
export default prekesadd;