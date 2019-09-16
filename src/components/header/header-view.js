import React, {Component} from "react";
import logo from "../../logo.svg";
import './header.css';

class Header extends Component {

	render() {
		return <header className="app-header">
			<div className="logout-container">
				<img src={logo}/>
				<p>Marcos Stival</p>
			</div>
		</header>
	}

}

export default Header;