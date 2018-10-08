import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';
import {navRoutes} from '../../constants/adminNav';
import Navbar from '../../components/navbar';
import ProductAdmin from '../../components/productAdmin';

class AdminMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
	

	}

	render(){
		return(
			<div className="centered_body">
				<h1>Menu de administrador</h1>
				<Navbar items={navRoutes}/>
				<div >
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
					<ProductAdmin name="Pan de Canela" price="200" amount="20"/>
				</div>
			</div>
		);
		
	}
}


export default AdminMenu;