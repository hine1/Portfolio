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
						<a href="#Home">Home</a>
					</li>
					<li className="nav-item">
						<a href="#About">About</a>
					</li>
					<li className="nav-item">
						<a href="#Project">Projects</a>
					</li>
					<li className="nav-item">
						<a href="#Contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;