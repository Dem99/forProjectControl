import React from 'react';
import {NavLink} from 'react-router-dom';
import logotip from './../../assets/images/main-logo.png';
import HomeModal from './HomeModal.js';
import './HomePage.css';

const Navbar = () => {
	return(
		<header className="header">
			<nav className="navbar">
			    <div className="nav-wrapper">
			     	<NavLink to='/' className="nav-logo"><img src={logotip} alt="logo"/></NavLink>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			         <HomeModal />
			      </ul>
			    </div>
			 </nav>
		</header>
	)
}

export default Navbar;