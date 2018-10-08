import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';
import {navRoutes} from '../../constants/adminNav';
import Navbar from '../../components/navbar';
import Product from '../../components/product';


class InsertProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	category: ["category 1", "category2","category3"],
    	actualCategory: "category 1"
    };
	
    this.registerProduct = this.registerProduct.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
	}

	registerProduct(){

	}

	categoryChange(event) {
		this.setState({actualCategory: event.target.value});
	}

	render(){
		return(
			<div className="centered_body">
				<h1>Estas creando un producto</h1>
				<Navbar items={navRoutes} selected={1}/>
				<div>
					<p>Nombre del producto</p>
					<input className="center-colum" type="text"/><br/>
					<p>Precio del producto en colones</p>
					<input className="center-colum" type="number"/><br/>
					<div>
					<label>Categoria: </label>
					<select className="center-colum"  onChange={this.categoryChange} value={this.state.actualCategory}>
					{this.state.category.map((cat, index) =>{
						return <option value={index}>{cat}</option>
				      }
				      )
					}
					</select>

					</div>
					<button onClick={this.registerProduct} className="center_normal_button positive_button">Crear</button>
				</div>
			</div>
		);
		
	}
}


export default InsertProduct;