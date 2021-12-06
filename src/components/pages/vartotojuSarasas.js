import React, { Component } from 'react';
import axios from 'axios';
import '../styles/main.css';


class vartotojuSarasas extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            followFrom:'',
            followTo:'',
            games: []
        }
    }
    handleFollowFromChange = (event) =>{
		this.setState({
			followFrom: event.target.value
		})
    }
    handleFollowToChange = (event) =>{
		this.setState({
			followTo: event.target.value
		})
    }
    filtruot = event =>{
        let FollowFrom = this.state.followFrom
        let FollowTo = this.state.followTo
        axios.get('http://localhost:8000/accounts?FromFollowers='+FollowFrom+'&ToFollowers='+FollowTo,{withCredentials: "true"}) 
        .then(response =>{
            this.setState({games: response.data})
        })
        .catch(error => {
            this.setState({errorMsg: 'Nerasta  vartotojų'})
        })
     }
    componentDidMount(){
        axios.get('http://localhost:8000/accounts',{withCredentials: "true"}) 
        .then(response =>{
            this.setState({games: response.data})
        })
        .catch(error => {
            this.setState({errorMsg: 'Nerasta  vartotojų'})
        })
     }
render(){
    const {games, errorMsg } = this.state
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
                <div class="w3layouts-text">
                <div class = "big-container">
                                <input placeholder="pagal followerių skaičių nuo" value={this.state.followFrom} onChange={this.handleFollowFromChange}/>
			
								<input placeholder="pagal followerių skaičių iki" value={this.state.followTo} onChange={this.handleFollowToChange}/>
								<button onClick={this.filtruot} type="button" name="button" class="but" >Filtruoti </button>
                                </div>
            <h3 class="text-virsuj">Vartotojų sąrašas:</h3>
            <table class="styled-table">
            <thead>
                <tr>
                    <th><center>ID</center></th>
                    <th><center>El. paštas</center></th>
                    <th><center>Vardas</center></th>
                    <th><center>Pavardė</center></th>
                    <th><center>Rolė</center></th>
                    <th><center>Followerių skaičius</center></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
        {
            games.length ?
            games.map(game =>
        <tr class="active-row">
        <td>{game.ID}</td>
        <td>{game.Email}</td>
        <td>{game.Name}</td>
        <td>{game.LastName}</td>
        <td>{game.Role}</td>
        <td>{game.FollowersAmount}</td>
        </tr>    
             ) :
            null
        }
        
        { errorMsg ? <div>{errorMsg}</div> : null}
    
        </tbody>
        </table>
        
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
export default vartotojuSarasas
