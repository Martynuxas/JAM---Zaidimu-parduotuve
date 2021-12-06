import React, { Component } from 'react';
import axios from 'axios';
import '../styles/main.css';
import '../styles/norusar.css';
import './sekejusar.js'

class ProflioPerziura extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            sekejai: []
        }
    }

    componentDidMount(){
       axios.get('http://localhost:8000/account',{withCredentials: "true"}) 
       .then(response =>{
           this.setState({sekejai: response.data})
       })
       .catch(error => {
           this.setState({errorMsg: 'Jūsų profilio informacija nerasta'})
       })
    }
render(){
    const {sekejai, errorMsg } = this.state
    return (
    <div>
        {
            <div class="table-responsive">
            <table class="table table-user-information">
                <tbody>
                    <tr>    
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-user  text-primary"></span>    
                                <h class="text-white">
                                Vardas:
                                </h>                                                 
                            </strong>
                        </td>
                        <td class="text-white">
                        {sekejai.Name}    
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-cloud text-primary"></span>  
                                <h class="text-white">
                                Pavardė:
                                </h>                                                
                            </strong>
                        </td>
                        <td class="text-white">
                        {sekejai.LastName} 
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-eye-open text-primary"></span> 
                                <h class="text-white">
                                Rolė:
                                </h>                                               
                            </strong>
                        </td>
                        <td class="text-white">
                        {sekejai.Role} 
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-envelope text-primary"></span> 
                                <h class="text-white">
                                El. paštas:
                                </h>                                                
                            </strong>
                        </td>
                        <td class="text-white">
                        {sekejai.Email} 
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                <h class="text-white">
                                Sukurtas:
                                </h>                                                 
                            </strong>
                        </td>
                        <td class="text-white">
                        {sekejai.CreatedAt} 
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                <h class="text-white">
                                Gimimo data:
                                </h>                                             
                            </strong>
                        </td>
                        <td class="text-white">
                        {sekejai.DateOfBirth} 
                        </td>
                    </tr>                                    
                </tbody>
            </table>
            <a href="/sekejusar" class="menu__link r-link text-underlined">Sekėjų sąrašas</a>
            <a href="/sekamusar" class="menu__link r-link text-underlined">Sekami vartotojai</a>
            <a href="/userred" class="menu__link r-link text-underlined">Redaguoti</a>
            <a href="/keistipw" class="menu__link r-link text-underlined">Keisti slaptažodį</a>
            </div>
        }
        { errorMsg ? <div>{errorMsg}</div> : null}
    </div>
    )
}
}
export default ProflioPerziura