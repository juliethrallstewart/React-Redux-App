import React from 'react';

const CharacterGenerator = props => {
	return (
		<div>
			<h4>{props.result.name}</h4>
			<img src={props.result.image} alt={props.result.name} />
		</div>
	);
};

export default CharacterGenerator;
