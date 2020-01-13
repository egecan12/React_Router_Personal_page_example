import React, { Component } from 'react';
import './App.css';
import Navbar from './componentsTools/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Anasayfa';
import Portfolio from './components/Portfolio';
import Bg from './bg.svg';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<img src={Bg} alt="Bg" className="bgResim" />
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/portfolio" component={Portfolio} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
