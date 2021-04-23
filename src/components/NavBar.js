import React from 'react';
import image from '../images/logo-medium.png';
import {NavLink} from 'react-router-dom';

function NavBar(){
	return (
		<div className="NavBar">
			<div className="brand">
				<img src={image} alt="logo"/>
				<h1>Hien Truong</h1>
			</div>
			<nav className="nav">
				<ul className="nav-items">
					<li className="nav-item">
						<NavLink to="/" exact activeClassName="active">
						Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about" exact activeClassName="active">
						About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/portfolio" exact activeClassName="active">
						Portfolio
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contact" exact activeClassName="active">
						Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;