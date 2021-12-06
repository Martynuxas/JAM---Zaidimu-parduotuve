import React from 'react'
import { Component } from 'react';
import '../styles/main.css';
import '../styles/products.css';
import { default as ProduktuSarasas } from '../lists/ProduktuSarasas';

class main extends Component {

	render() {
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
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Veiksmo</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Nuotykiu</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Lenktyniu</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">PC</a></li>
                <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">XBOX-PS5</a></li>
            </ul>
            <div class="clearfix"> </div>	
        </nav>
    </div>
				</nav>
			</div>
		</div>
		<div class="banner-info">
			<div class="container">
				<div class="w3layouts-text">
					<h2>Assassin's Creed Origins</h2>
					<label></label>
					<h2>Jau pas mus!</h2>
                    <h3>Užsisakyk dabar!<h3>39.99$</h3></h3>
				</div>
			</div>
		</div>
		</div>
		</div>		
	<ProduktuSarasas/>

 	
	<div class="jarallax  wthree-subscribe">
		<div class="w3-agileits-testimonial subscribe-bg">
			<div class="container">
				<h3>Gaukite naujienas apie žaidimus!</h3>
				<div class="w3-agileits-subscribe-form">
					<form action="#" method="post">
						<input type="text" placeholder="El. paštas" name="Email" required=""/>
						<button class="btn1">Prenumeruoti</button>
					</form>
				</div>
			</div>
		</div>
	</div>
		<div class="contact" id="contact">
			<div class="container">  	
				<div class="w3-agile-map"> 
					<h3>Mūsų parduotuvė</h3> 
					<iframe src="https://www.google.com/maps?&amp;q=studentu48Kaunas)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
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
	<script src="js/jarallax.js"></script>
	<script type="text/javascript">
	</script>
	<script src="js/responsiveslides.min.js"></script>
<script type="text/javascript" src="js/move-top.js"></script>
<script type="text/javascript" src="js/easing.js"></script>
	<script type="text/javascript">
	</script>
</body>	
) 
} 
}
export default main;