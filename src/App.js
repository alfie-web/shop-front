import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage, CartPage } from './pages';
import { Header } from './components';

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/goods/:id" render={() => <div>Страница товара</div>} />
				<Route exact path="/cart" component={CartPage} />
				<Redirect from="*" to="/" />
			</Switch>
		</div>
	);
}

export default App;
