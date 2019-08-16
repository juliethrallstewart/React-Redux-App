import axios from 'axios';

export const FETCH_CHARACTER_DATA_START = 'FETCH_CHARACTER_DATA_START';
export const FETCH_CHARACTER_DATA_SUCCESS = 'FETCH_CHARACTER_DATA_SUCCESS';
export const FETCH_CHARACTER_DATA_FAILURE = 'FETCH_CHARACTER_DATA_FAILURE';

// axios.defaults.baseURL = 'https://rickandmortyapi.com/api/character/';

export const getData = () => {
	return dispatch => {
		dispatch({ type: FETCH_CHARACTER_DATA_START });
		axios
			.get('https://rickandmortyapi.com/api/character/')
			.then(res => {
				dispatch({ type: FETCH_CHARACTER_DATA_SUCCESS, payload: res.data.results });
			})
			.catch(err => {
				dispatch({ type: FETCH_CHARACTER_DATA_FAILURE, payload: err.response });
			});
	};
};

// .get(`https://api.nasa.gov/planetary/apod?api_key=yzQPOOUhplZvznQ3EmttZmYCC9GWOT7Eb3tVNNrn`)
