import { FETCH_CHARACTER_DATA_START, FETCH_CHARACTER_DATA_SUCCESS, FETCH_CHARACTER_DATA_FAILURE } from '../actions';

const initialState = {
	results: [],
	isLoading: false,
	error: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CHARACTER_DATA_START:
			return {
				...state,
				isLoading: true,
				error: ''
			};
		case FETCH_CHARACTER_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				results: action.payload,
				error: ''
			};
		default:
			return state;
	}
};
