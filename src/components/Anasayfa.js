import React, { Component } from 'react';
import Logo from '../elipsL1.svg';
import Navbar from '../componentsTools/Navbar';
import style from '../components/anasayfa.css';
import logoReact from '../logo.svg';

class Anasayfa extends Component {
	render() {
		return (
			<div>
				<h1 id="title1">Modern Web Design</h1>
				<h1 id="title2">Application Development</h1>
				<h1 id="name">Egecan Kahyaoglu</h1>

				<img src={logoReact} alt="react" class="App-logo" />
			</div>
		);
	}
}
export default Anasayfa;
