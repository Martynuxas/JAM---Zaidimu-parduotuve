
import React from 'react'
import '../styles/main.css';
import axios from 'axios'
import { Component } from 'react';
import fotos from '../images/product-1.jpg';
import '../styles/showProduct.css';
import '../lists/ProduktuSarasas';

class showProduct extends Component {

	constructor(props)
	{
		super(props)
		this.state = {
            comment:'',
            score:'',
            scoreFrom:'',
            scoreTo:'',
            sekejai:[],
            ivertinimai:[]
		}
	}
    handleScoreChange = (event) =>{
		this.setState({
			score: event.target.value
		})
    }
    handleCommentChange = (event) =>{
		this.setState({
			comment: event.target.value
		})
    }
    handleScoreFromChange = (event) =>{
		this.setState({
			scoreFrom: event.target.value
		})
    }
    handleScoreToChange = (event) =>{
		this.setState({
			scoreTo: event.target.value
		})
    }
    detiKrepseli = event =>{
        let Button = localStorage.getItem('buttonValue')
       axios.post('http://localhost:8000/cart/'+Button, {},{withCredentials: "true"}) 
        .then(response =>{
            alert("Žaidimas pridėtas į krepšelį");
        })
       .catch(error => {
        alert("Žaidimas nepridėtas");
	   })


    }
    redaguoti = event =>{
        let Button = localStorage.getItem('buttonValue')
        localStorage.setItem('buttonValue',Button)
        return window.location.href = "/prekesred";
    }
    pasalinti = event =>{
        let Button = localStorage.getItem('buttonValue')
        axios.delete('http://localhost:8000/games/'+Button, {withCredentials: "true"})
        .then(response =>{
            alert("Žaidimas pašalintas");
            return window.location.href = "/mainPage";
        })
       .catch(error => {
        alert("Įvyko klaida šalinant žaidimą");
	   })
    }
    detiNoruSarasa = event =>{
        let Button = localStorage.getItem('buttonValue')
        axios.post('http://localhost:8000/wishlist/'+Button, {}, {withCredentials: "true"})
        .then(response =>{
            alert("Žaidimas pridėtas į norų sąrašą");
        })
       .catch(error => {
        alert("Žaidimas nepridėtas į norų sąrašą");
	   })

    }
    ivertint = event =>{
        let Comment = this.state.comment
		let Score = parseFloat(this.state.score)
		const duomenys = {
			Comment,
			Score
        };
        console.log(duomenys)
        let Button = localStorage.getItem('buttonValue')
        axios.post('http://localhost:8000/rate/'+Button, duomenys, {withCredentials: "true"})
        .then(response =>{
            alert("Įvertinimas pateiktas!");
            return window.location.href = "/showProduct";
        })
       .catch(error => {
        alert("Nepavyko pateikti įvertinimo");
	   })

    }
    filtruot = event =>{
        let ScoreFrom = this.state.scoreFrom
        let ScoreTo = this.state.scoreTo
        console.log(ScoreFrom, ScoreTo)
        let Button = localStorage.getItem('buttonValue')
        axios.get('http://localhost:8000/rate?GameID='+Button+'&From='+ScoreFrom+'&To='+ScoreTo, {withCredentials: "true"})
        .then(response =>{
            this.setState({ivertinimai: response.data})
            alert("Įvertinimas pateiktas!");
            //return window.location.href = "/showProduct";
        })
       .catch(error => {
        alert("Nepavyko pateikti įvertinimo");
	   })

    }

    componentDidMount(){
        let Button = localStorage.getItem('buttonValue')
        axios.get('http://localhost:8000/games?gameID='+Button, {withCredentials: "true"}) 
       .then(response =>{
           this.setState({sekejai: response.data})
       })
       .catch(error => {
       })
       axios.get('http://localhost:8000/rate?GameID='+Button, {withCredentials: "true"}) 
       .then(response =>{
           console.log(response.data)
           this.setState({ivertinimai: response.data})
       })
       .catch(error => {
        this.setState({errorMsgg: 'Komentarų nėra'})
	   })
	}
	render(){
        const {sekejai, errorMsg } = this.state
        const {ivertinimai, errorMsgg } = this.state
        
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
        {
            sekejai.length ?
            sekejai.map(sekejas =>
        <div class ="big-container">
        <h2 class = "maintitle">{sekejas.Name}</h2>
        <div class="row">
        <div class="col-5">
                <img src={fotos}/>
         </div>
         <div class="col-5">
        <div class = "description">
         <h2 class = "dctitle">Žaidimo aprašymas</h2>
         <h6 class = "dc">
         It is a long established fact that a reader will 
         be distracted by the readable content of a page when 
         looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal distribution of 
          letters, as opposed to using 'Content here, content
           here', making it look like readable English. Many 
           desktop publishing packages and web page editors now 
           use Lorem Ipsum as their default model text, and a 
           search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versions have evolved
             over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h6>
         </div>

                    <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    </div>
                    <h2 class = "price">${sekejas.Price}</h2>
                    <button onClick={this.detiKrepseli} type="button" name="button" class="btn" >Dėti į krepšelį</button>
                    <button onClick={this.detiNoruSarasa} type="button" name="button" class="btn" >Dėti į norų sarašą</button>
                    <tr></tr>
                    <button onClick={this.redaguoti} type="button" name="button" class="btn" >Redaguoti</button>
                    <button onClick={this.pasalinti} type="button" name="button" class="btn" >Pašalinti</button>
                    </div>
                    </div>
                    <div class="col-3">
                    <h2 class = "ivert">Komentaras</h2>
                    ​<textarea id="txtArea" rows="5" cols="30" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                    <h2 class = "ivert">Įvertinimas</h2>
                    <input type="range" min="0" max="5" step="1" value={this.state.score} onChange={this.handleScoreChange}></input>
                    <button onClick={this.ivertint} type="button" name="button" class="btn" >Pateikti</button>
                    </div>



					
                                <div class = "big-container">
                                <input placeholder="pagal įvertinimą nuo" value={this.state.scoreFrom} onChange={this.handleScoreFromChange}/>
			
								<input placeholder="pagal įvertinimą iki" value={this.state.scoreTo} onChange={this.handleScoreToChange}/>
								<button onClick={this.filtruot} type="button" name="button" class="but" >Filtruoti </button>
                                </div>
            

                   
   
        <div class="w3layouts-text">    
        <h3 class="text-virsuj">Įvertinimai ir komentarai:</h3>
        <table class="styled-table">        
            <thead>
                <tr>
                    <th><center>Įvertinimas(0-5)</center></th>
                    <th><center>Komentaras</center></th>
                </tr>
                </thead>
            <tbody>
                    {
            ivertinimai.length ?
            ivertinimai.map(ivertinimas =>

                <tr class="active-row">
                            <td>{ivertinimas.Score}</td>
                            <td>{ivertinimas.Comment}</td>
                           
                </tr>  
      
                ) :
         null
     }
     { errorMsgg ? <div>{errorMsgg}</div> : null}
     </tbody>
     
     </table>
     </div>
         </div>
         ) :
         null
     }
     { errorMsg ? <div>{errorMsg}</div> : null}
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
export default showProduct;