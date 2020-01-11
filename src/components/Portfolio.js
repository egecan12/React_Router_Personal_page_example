import React, { Component } from 'react';
import project1 from '../project1.jpg';
import project2 from '../eyeball.jpg';
import project3 from '../game.png';
import style from './portfolio.css';
import LogoBehance from '../behancelogo.svg';
import LogoGithub from '../githubLogo.svg';
import LogoLinkedin from '../linkedin.svg';
import LogoCodepen from '../codepen.svg';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component {
	render() {
		return (
			<div>
				<h1 id="portfolioTitle">For more info take a look at my behance page </h1>
				<a href="https://www.behance.net/egecankahyaoglu">
					<img src={LogoBehance} alt="Egeface" id="logoBehance" />
				</a>
				<a href="https://github.com/egecan12">
					<img src={LogoGithub} alt="Egeface" id="logoGithub" />
				</a>
				<a href="https://codepen.io/egecan12">
					<img src={LogoCodepen} alt="Egeface" id="logoCodepen" />
				</a>
				<a href="https://www.linkedin.com/in/egecan-kahyaoglu/">
					<img src={LogoLinkedin} alt="Egeface" id="logoLinkedin" />
				</a>
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={project1} alt="project1" id="project1" />
						</div>
						<div className="carousel-item">
							<img src={project2} alt="project2" id="project2" />
						</div>
						<div className="carousel-item">
							<img src={project3} alt="project3" id="project3" />
						</div>
						<div className="carousel-item">
							<img src={project1} alt="project4" id="project4" />
						</div>
						<div className="carousel-item">
							<img src={project1} alt="project5" id="project5" />
						</div>
						<div className="carousel-item">
							<img src={project1} alt="project6" id="project6" />
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleControls"
						role="button"
						data-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleControls"
						role="button"
						data-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		);
	}
}
