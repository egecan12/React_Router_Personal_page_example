import React, { Component } from 'react';
import project1 from '../project1.jpg';
import style from './portfolio.css';

export default class Portfolio extends Component {
	render() {
		return (
			<div>
				<h1 id="portfolioTitle">For more info take a look at my behance </h1>

				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={project1} alt="project1" id="project1" />
						</div>
						<div className="carousel-item">
							<img src={project1} alt="project2" id="project2" />
						</div>
						<div className="carousel-item">
							<img src={project1} alt="project3" id="project3" />
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
