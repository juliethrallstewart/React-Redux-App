import React from 'react';

const FactGenerator = props => {
	return (
		<div>
			<h4>{props.webcam.name}</h4>
			<img src={props.webcam.url} alt={props.webcam.name} />
		</div>
	);
};

export default FactGenerator;
