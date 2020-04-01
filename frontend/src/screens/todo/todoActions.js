import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
	type: 'DESCRIPTION_CHANGED',
	payload: event.target.value
})

export const search = () => {
	// The line below is an async call, however, when the data is requested. His Promise is not resolved!
	// So it must be solved by a middleware
	const request = axios.get(`${URL}?sort=-createdAt`);
	return {
		type: 'TODO_SEARCHED',
		payload: request
	}
}
