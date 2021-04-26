import React from 'react';
import {goals} from '../utils/performance-goals';
import Card from '../components/Card';
import image from '../images/photo.jpg';
function AboutPage(){
	return(
		<div className="AboutPage">
				<h1>About Me</h1>
				<div className="goals">
					{goals.map((goal) => 
						<Card {...goal}/>
					)}
				</div>
				<div className="introduction">
					<div className="img"><img src={image}/></div>
					<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
					<br/>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
				</div>
		</div>
	)
}

export default AboutPage;