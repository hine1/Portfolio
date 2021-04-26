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
					<p>Full Stack Web Developer 
						<br/>
						Focused on designing clean and user-friendly experiences.
					</p>
				</div>
		</div>
	)
}

export default AboutPage;