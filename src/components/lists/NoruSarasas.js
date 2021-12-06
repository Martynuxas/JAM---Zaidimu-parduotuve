import React, { Component } from 'react';
import axios from 'axios';
import '../styles/main.css';
import '../styles/norusar.css';
import '../pages/sekejusar.js'
import '../styles/norusar.css';

class NoruSarasas extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            sekejai: []
        }
    }
    handleClick(buttonValue){
        axios.delete('http://localhost:8000/wishlist/'+buttonValue,{withCredentials: "true"})
        .then(response =>{
            alert("Prekė pašalinta iš norų sąrašo!");
            return window.location.href = "/norusar";

        })
        .catch(error => {
            alert("Prekė nepašalinta iš norų sąrašo!");
        })
    }
    componentDidMount(){
       axios.get('http://localhost:8000/wishlist', {withCredentials: "true"}) 
       .then(response =>{
           this.setState({sekejai: response.data})
       })
       .catch(error => {
           this.setState({errorMsg: 'Jūsų norų sąrašas tusčias'})
       })
    }
render(){
    const {sekejai, errorMsg } = this.state
    return (
    <div>
        <div class="w3layouts-text">
                <h3 class="text-virsuj">Jūsų norų sąrašas:</h3>
                <table class="styled-table">
                <thead>
                    <tr>
                        <th>Žaidimo pavadinimas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

        
        
        {
            sekejai.length ?
            sekejai.map(sekejas =>
            <tr class="active-row">
            <td>{sekejas.Name}</td>
            <div key={sekejas.Name}>
            <button onClick={e => this.handleClick(sekejas.ID)} type="button" name="button" class="btn login_btn" >Pašalinti </button>
            </div>
            </tr>) :
            null
        }
        </tbody>
        { errorMsg ? <div>{errorMsg}</div> : null}
        </table>
        </div>
    </div>
    )
}
}
export default NoruSarasas