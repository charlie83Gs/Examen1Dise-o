import React from 'react';
import './product_style.css'

class ProductAdmin extends React.Component {
	constructor(props) {
    
	super(props);
    
	this.state = {
      name: this.props.name,
	  price: this.props.price,
	  amount: this.props.amount,
    };
	}
	
	
	render(){
		return(
		<div className = "admin_product_body">
			<p className="product_title">{this.state.name}</p>
			<p>Precio: ₡ {this.state.price}</p>
			<div>
				<label>Disponible: </label>
				<input className="product_amount_input" value = {this.state.amount}/>
			</div>
			<div>
				<button className="minus_button">-</button>
				<button className="plus_button">+</button>
			</div>
		</div>
		);
	}
	
	


	}
	
export default ProductAdmin;

