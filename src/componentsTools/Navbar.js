import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			// <ul>
			// 	<li>
			// 		<Link to="/home">Home</Link>
			// 	</li>
			// 	<li>
			// 		<Link to="/">News</Link>
			// 	</li>
			// 	<li>
			// 		<Link to="/portfolio">Porfolio</Link>
			// 	</li>
			// 	<li>
			// 		<Link to="/about">About</Link>
			// 	</li>
			// </ul>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="#">
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/portfolio">
								Portfolio
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Navbar;
