import React, { Component } from 'react';
import Logo from '../elipsL1.svg';
import Navbar from '../componentsTools/Navbar';
import style from '../components/anasayfa.css';

class Anasayfa extends Component {
	render() {
		return (
			<div>
				<h1 id="title1">Modern Web Designs </h1>
				<h1 id="title2">Application Development</h1>
				<h1 id="name">Egecan Kahyaoglu</h1>
				<img src={Logo} alt="blueball" />
			</div>
		);
	}
}
export default Anasayfa;
