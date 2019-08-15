import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Facts from './components/Facts';

function App () {
	return (
		<div className="App">
			<header className="App-header" />
			<Facts />
		</div>
	);
}

export default App;
