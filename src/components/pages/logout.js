import React from 'react'
import { Component } from 'react';
import axios from 'axios';

class logout extends Component {
	componentDidMount(){
        axios.delete('http://localhost:8000/login', {withCredentials: "true"}) 
       .then(response =>{
		alert("ATSIJUNGTA!");
		return window.location.href = "/mainPage";
       })
       .catch(error => {
		return window.location.href = "/mainPage";
       })
	}
	render() {
		return (
<body>
	
</body>	
) 
} 
}
export default logout;