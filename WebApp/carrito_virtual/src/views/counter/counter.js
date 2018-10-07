import React from 'react';
import Navbar from '../../components/navbar';
import Product from '../../components/product';
import {routes, routes_singleton} from '../../constants/routes';
import {navRoutes} from '../../constants/userNavbar';
import './style.css';




class Counter extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
    };
	

	}

	render(){
		return(
			<div className="centered_body">
				<h1>Productos disponibles</h1>
				<Navbar items={navRoutes}/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
				<Product name="Pan de Canela" price="200" amount="20"/>
			</div>
		);
		
	}
}


export default Counter;