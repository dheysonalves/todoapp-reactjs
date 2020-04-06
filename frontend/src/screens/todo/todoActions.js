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

export const add = (description) => {
	return dispatch => {
		axios.post(URL, { description })
			.then(response => dispatch({ type: 'TODO_CLEAR', payload: response.data }))
			.then(response => dispatch(search()))
	}
}

export const markAsDone = (todo) => {
	return dispatch => {
		axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
			.then(resp => dispatch(search()))
	}
}

export const markAsPending = (todo) => {
	return dispatch => {
		axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
			.then(resp => dispatch(search()))
	}
}
export const remove = (todo) => {
	return dispatch => {
		axios.delete(`${URL}/${todo._id}`)
			.then(resp => dispatch(search()))
	}
}

export const clear = () => {
	// TODO Refactor to a file with constants
	return { type: 'TODO_CLEAR' }
}
