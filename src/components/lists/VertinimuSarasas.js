import React, { Component } from 'react';
import axios from 'axios';
import '../styles/main.css';
import '../styles/norusar.css';
import '../pages/sekejusar.js'
import '../styles/norusar.css';

class VertinimuSarasas extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            sekejai: []
        }
    }
    redaguoti(buttonValue){
        localStorage.setItem('ScoreValue', buttonValue);
        return window.location.href = "/vertinimuRed";
    }
    handleClick(buttonValue){
        axios.delete('http://localhost:8000/rate/'+buttonValue,{withCredentials: "true"})
        .then(response =>{
            alert("Komentaras pašalintas!");
            return window.location.href = "/vertinimai";

        })
        .catch(error => {
            alert("Nepavyko pašalinti komentaro!");
        })
    }
    componentDidMount(){
       axios.get('http://localhost:8000/rate', {withCredentials: "true"}) 
       .then(response =>{

           this.setState({sekejai: response.data})
       })
       .catch(error => {
           this.setState({errorMsg: 'Jūs komentarų neturite'})
       })
    }
render(){
    const {sekejai, errorMsg } = this.state
    return (
    <div>
        <div class="w3layouts-text">
                <h3 class="text-virsuj">Jūsų komentarų sąrašas:</h3>
                <table class="styled-table">
                <thead>
                    <tr>
                        <th>Įvertinimas</th>
                        <center><th>Komentaras</th></center>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

        
        
        {
            sekejai.length ?
            sekejai.map(sekejas =>
            <tr class="active-row">
            <td>{sekejas.Score}</td>
            <td>{sekejas.Comment}</td>
            <div key={sekejas.Name}>
            <button onClick={e => this.redaguoti(sekejas.ID)} type="button" name="button" class="btn login_btn" >Redaguoti </button>
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
export default VertinimuSarasas