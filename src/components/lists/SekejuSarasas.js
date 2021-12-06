import React, { Component } from 'react';
import axios from 'axios';
import '../styles/main.css';
import '../styles/norusar.css';
import '../pages/sekejusar.js'


class SekejuSarasas extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            sekejai: []
        }
    }
    componentDidMount(){
       axios.get('http://localhost:8000/followers',{withCredentials: "true"}) 
       .then(response =>{
        console.log(response)
           this.setState({sekejai: response.data})
       })
       .catch(error => {
       console.log(error)
           this.setState({errorMsg: 'Jūsų niekas neseka'})
       })
    }
render(){
    const {sekejai, errorMsg } = this.state
    return (
    <div>
        <tbody>
            
        <div class="w3layouts-text">
        <h3 class="text-virsuj">Jus seka:</h3>
            <table class="styled-table">
            <thead>
                <tr>
                    <th><center>Slapyvardis</center></th>
                    
                </tr>
            </thead>
    
        {
      
            sekejai.length ?
            sekejai.map(sekejas =>
            
            <tbody>
            <tr class="active-row">
                        <td>{sekejas.Name}</td>
           </tr>
          
                </tbody>
              ) :
            null
        
        }
        { errorMsg ? <div>{errorMsg}</div> : null}
        </table>
        </div>
        </tbody>
    </div>
    )
}
}
export default SekejuSarasas
