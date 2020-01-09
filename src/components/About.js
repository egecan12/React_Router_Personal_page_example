import React, { Component } from 'react';
import Myface from '../dograma.png';
import style from '../components/about.css';
import Navbar from '../componentsTools/Navbar';

class About extends Component {
	render() {
		return (
			<div>
				<img src={Myface} alt="Egeface" id="aboutPic" />
				<p id="about">
					Web Developer in Barrie & Toronto Ontario <br /> Lover of Design <br /> Social Media Enthusiast
					Basketball Fan
				</p>
			</div>
		);
	}
}
export default About;
