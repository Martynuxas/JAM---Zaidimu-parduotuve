import React, { Component } from 'react';
import axios from 'axios';
import '../styles/main.css';
import '../styles/norusar.css';
import '../pages/sekejusar'


class KrepselioSarasas extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            games: []
        }
    }
    handleClick(id){
        console.log(id)
		axios.delete('http://localhost:8000/cart/'+id,{withCredentials: "true"})
		  .then(response =>{
              alert("Prekė pašalinta iš krepšelio!");
              return window.location.href = "/krepselis";	  
	   })
       .catch(error => {
           alert("Prekė nepašalinta iš krepšelio!");
       })
       
    }
    componentDidMount(){
       axios.get('http://localhost:8000/cart',{withCredentials: "true"}) 
       .then(response =>{
           this.setState({games: response.data})
       })
       .catch(error => {
           this.setState({errorMsg: 'Jūsų krepšelis tusčias'})
       })
    }
render(){
    const {games, errorMsg } = this.state
    return (
    <div class="w3layouts-text">
            <h3 class="text-virsuj">Krepšelis:</h3>
            <table class="styled-table">
            <thead>
                <tr>
                    <th><center>Prekės pavadinimas</center></th>
                    <th><center>Kaina</center></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
        {
            games.length ?
            games.map(game =>
        <tr class="active-row">
        <td>{game.Name}</td>
        <td>{game.Price}$</td>
        <div key={game.Name}>
        <button onClick={e => this.handleClick(game.ID)} type="button" name="button" class="btn login_btn" >Pasalinti </button>
        </div>
        </tr>    
             ) :
            null
        }
        
        { errorMsg ? <div>{errorMsg}</div> : null}
    
        </tbody>
        </table>
        <a href="/mainPage" class="menu__link r-link text-underlined">Apmokėti</a>
        </div>
    )
}
}
export default KrepselioSarasas
