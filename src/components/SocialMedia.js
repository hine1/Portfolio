import React from 'react';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import {socialMedia} from '../utils/social-media';

function SocialMedia({type}){
	const media = getLink(type);
	var MyIcon = getIcon(media.iconName);
	return(
		<a href={media.link}>
			<div className="mediaIcon">
				<MyIcon/>
			</div>
		</a>
	);
}

function getIcon(iconName){
	switch (iconName){
		default:
			return FaGithub;
		case 'FaLinkedin':
			return FaLinkedin;
		case 'FaCodepen':
			return FaCodepen;
	}
}
function getLink(type){
	const media = socialMedia.find(item => item.type === type);
	if (media != null) return media;
}

export default SocialMedia;