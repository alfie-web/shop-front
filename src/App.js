import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from './pages';
import { Header } from './components';

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Redirect from="*" to="/" />
			</Switch>
		</div>
	);
}

export default App;
