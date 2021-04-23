import React from 'react';
import { FaRocket, FaBrain, FaLocationArrow,FaReadme, FaRecycle } from 'react-icons/fa';
function Card({keyword, descriptions, iconName}){
	var MyIcon = getIcon(iconName);
	return(
		<div className="Card">
			<MyIcon className="icon"/>
			<h2>{keyword}</h2>
			<h5>{descriptions}</h5>
		</div>
	);
}

function getIcon(iconName){
	switch (iconName){
		default:
			return FaRocket;
		case 'FaLocationArrow':
			return FaLocationArrow;
		case 'FaBrain':
			return FaBrain;
		case 'FaReadme':
			return FaReadme;
		case 'FaRecycle':
			return FaRecycle;

	}
}

export default Card;