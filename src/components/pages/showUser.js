import React from 'react'
import '../styles/main.css';
import ProfilioPerziura from './ProfilioPerziura';

function showUser() {
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
        <div class="container bootstrap snippets bootdey">
<div class="panel-body inf-content">
    <div class="row">
        <div class="col-md-4">
            <img alt="" styles="width:600px;" title="" class="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
            <ul title="Įvertinimas" class="list-inline ratings text-center">
                <li><span class="glyphicon glyphicon-star"></span></li>
                <li><span class="glyphicon glyphicon-star"></span></li>
                <li><span class="glyphicon glyphicon-star"></span></li>
                <li><span class="glyphicon glyphicon-star"></span></li>
                <li><span class="glyphicon glyphicon-star"></span></li>
            </ul>
        </div>
        <div class="col-md-6">
            <strong>Profilio informacija</strong>
            <ProfilioPerziura/>
            </div>
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
export default showUser;