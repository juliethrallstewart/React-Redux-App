import React from 'react';
import { connect } from 'react-redux';
import { FillSpinner } from 'react-spinners-kit';
import './characters.css';
import { getData } from '../actions';
import CharacterGenerator from './CharacterGenerator';

const Facts = props => {
	return (
		<div className="container1">
			<h1 className="headline">Rick & Morty!</h1>
			<button className="cta-button" onClick={props.getData}>
				{props.isLoading ? <FillSpinner className="spinner" color="#00BFFF" size={20} /> : 'Get Characters!'}
			</button>
			{console.log(props.results.map(item => item.name))}
			<div className="container2">
				{props.results && props.results.map(char => <CharacterGenerator key={char.id} result={char} />)}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		results: state.results
	};
};
export default connect(mapStateToProps, { getData })(Facts);
