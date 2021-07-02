import React from 'react';
import frontImage from '../images/twist-front.jpg';
import image from '../images/twist.jpg';
function ProjectPage(){
	const toggleProjectDetails = e => {
		let projectDetails = document.getElementById("TwistDetails");
		if (projectDetails.style.width == '0px'){
			projectDetails.style.width='100%';
			projectDetails.style.height='100%';
			projectDetails.style.zIndex = '1';

		} 
		else {
			projectDetails.style.width = 0;
			projectDetails.style.height = 0;
			projectDetails.style.zIndex = 0;
		}
	}
	return(
		<div className="ProjectPage" id="Project">
				<h1>Projects</h1>
				<div className="projects">
					<div className="Twist" onClick={toggleProjectDetails}>
						<img src={frontImage} alt="Twist"/>
						<h2>Twist</h2>
						<p>ReactJS | Scss | Node.js</p>
						<p>A web app allowing users to store their personal recipes while also exploring and modifying others' recipes</p>
					</div>
					<div id="TwistDetails"  onClick={toggleProjectDetails}>
						<img src={image} alt="Twist"/>
					</div>
  				</div>
		</div>
	);
}

export default ProjectPage;