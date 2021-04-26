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
					<div className="img"><div className="profile-img"></div></div>
					<p>Full Stack Web Developer 
						<hr/><br/>
						Focused on designing clean and user-friendly experiences.
						Experienced with HTML, CSS/SASS, ReactJS for front-end development.
						<br/><br/>
						Certified as a Java Spring Boot developer by Udacity. Experienced with Java Spring Boot, Node.Js, and SQL.
					</p>
				</div>
		</div>
	)
}

export default AboutPage;