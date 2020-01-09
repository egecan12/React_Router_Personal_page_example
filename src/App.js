import React, { Component } from 'react';
import './App.css';
import Navbar from './componentsTools/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Anasayfa';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/about" component={About} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
