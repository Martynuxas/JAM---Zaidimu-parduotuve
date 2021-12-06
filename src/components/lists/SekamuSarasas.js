import React, { Component } from 'react';
import axios from 'axios';
import '../styles/main.css';
import '../styles/norusar.css';
import '../pages/sekejusar.js'

class SekamuSarasas extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            sekejai: []
        }
    }
    handleClick(buttonValue){

        axios.delete('http://localhost:8000/follow/'+buttonValue,{withCredentials: "true"})
        .then(response =>{
            alert("Pašalintas iš sekamų sąrašo!");
            return window.location.href = "/sekamusar";   
        })
        .catch(error => {
            console.log(error)
            alert("Nepavyko pašalinti!");
        })
        
    }
    componentDidMount(){
       axios.get('http://localhost:8000/followings',{withCredentials: "true"}) 
       .then(response =>{
        console.log(response)
           this.setState({sekejai: response.data})
       })
       .catch(error => {
    
        
           this.setState({errorMsg: 'Jūs nieko nesekate'})
       })
    }
render(){
    const {sekejai, errorMsg } = this.state
    return (
    <div>
        <div class="w3layouts-text">
        <h3 class="text-virsuj">Jūs sekate:</h3>
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Slapyvardis</th>
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
                            <button onClick={e => this.handleClick(sekejas.ID)} type="button" name="button" class="btn" >Atsaukti </button>
                            </div>
                           
                </tr>  
            ) :
            null
        }
        </tbody>
        </table>
        { errorMsg ? <div>{errorMsg}</div> : null}
        </div>
    </div>
    )
}
}
export default SekamuSarasas