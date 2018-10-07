import React from 'react';
import './product_style.css'

class Product extends React.Component {
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
		<button className = "product_body">
			<p className="product_title">{this.state.name}</p>
			<p>precio: {this.state.price}</p>
			<p>cantidad: {this.state.amount}</p>
		</button>
		);
	}
	
	


	}
	
export default Product;

