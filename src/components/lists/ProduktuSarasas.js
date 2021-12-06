import React, { Component } from 'react';
import axios from 'axios';
import '../styles/products.css';
import foto from '../images/product-1.jpg';

class ProduktuSarasas extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            sekejai: [],
            priceFrom:'',
			priceTo:'',
            button:'',
			category:''
        }
    }
    handlePriceFromChange = (event) =>{
		this.setState({
			priceFrom: event.target.value
		})
	}
	handlePriceToChange = (event) =>{
		this.setState({
			priceTo: event.target.value
		})
	}
	handleCategoryChange = (event) =>{
		this.setState({
			category: event.target.value
		})
    }
    handleClickPerziura(buttonValue){
        localStorage.setItem('buttonValue', buttonValue);
        window.location.href = "/showProduct";
    }
    handleClick = event =>{

		let Category = this.state.category
		let PriceFrom = parseFloat(this.state.priceFrom)
		let PriceTo = parseFloat(this.state.priceTo)
        //axios.get('http://localhost:8000/games?category='+Category, {withCredentials: "true"}) 
        axios.get('http://localhost:8000/games?priceFrom='+PriceFrom+'&priceTo='+PriceTo+'&category='+Category, {withCredentials: "true"}) 
        //axios.get('http://localhost:8000/games?priceFrom='+PriceFrom+'&priceTo='+PriceTo, {withCredentials: "true"}) 
        .then(response =>{
            this.setState({sekejai: response.data})
            
        })
        .catch(error => {
            this.setState({errorMsg: 'Produktų nerasta'})
        })
      };
    componentDidMount(){
       axios.get('http://localhost:8000/games', {withCredentials: "true"}) 
       .then(response =>{
           this.setState({sekejai: response.data})
       })
       .catch(error => {
           this.setState({errorMsg: 'Produktų nerasta'})
       })
    }
render(){
    const {sekejai, errorMsg } = this.state
    return (
        
    <div>
    <div class ="small-container">
    
	<h2 class = "title">Filtravimas</h2>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"></span>
                                <select class="form-control" id = "pasirinkimas" onChange={this.handleCategoryChange} value={this.state.category}>
                                <option selected placeholder="">pagal kategorija</option>
                                <option value="Veiksmo">Veiksmo </option>
                                    <option value="Lenktynių">Lenktynių</option>
									<option value="Strateginis">Strateginis</option>
									<option value="MMORPG">MMORPG</option>
									<option value="Naršyklinis">Naršyklinis</option>
									<option value="Karo">Karo</option>
									<option value="Indie">Indie</option>
									<option value="Nuotykių">Nuotykių</option>
                                    </select>     
			
								<span class="input-group-text"></span>
                                <input placeholder="pagal kaina nuo" value={this.state.priceFrom} onChange={this.handlePriceFromChange}/>
								<span class="input-group-text"></span>
								<input placeholder="pagal kaina iki" value={this.state.priceTo} onChange={this.handlePriceToChange}/>
								
						</div>
                        <button onClick={this.handleClick} type="button" name="button" class="but" >Filtruoti </button>
						</div> 
   
	
        
        <h2 class = "title">Žaidimai</h2>
        <div class="row">
        {
            sekejai.length ?
            sekejai.map(sekejas =>
            <div class="col-4">
                <img src={foto}/>
                    <h4>{sekejas.Name}</h4>
                    <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    </div>
                    <h5>${sekejas.Price}</h5>
                    <div key={sekejas.Name}>
                            <button onClick={e => this.handleClickPerziura(sekejas.ID)} type="button" name="button" class="btn" >Peržiūrėti </button>
                            </div>
            </div>
    
            ) :
            null
        }
        { errorMsg ? <div>{errorMsg}</div> : null}
        </div>
    </div> </div>
    )
}
}
export default ProduktuSarasas