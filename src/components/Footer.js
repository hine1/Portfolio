import React from 'react';
import SocialMedia from './SocialMedia';

function Footer(){
	return(
		<div className="Footer">
			<div className="socialMedia">
				<SocialMedia type="linkedin"/>
				<SocialMedia type="github"/>
				<SocialMedia type="codepen"/>
			</div>
			<p>Hien Truong © 2021</p>
		</div>
	);
}

export default Footer;