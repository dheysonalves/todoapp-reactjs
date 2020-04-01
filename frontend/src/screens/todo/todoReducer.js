const INITIAL_STATE = {
	description: 'Read book',
	list: [
		{
			_id: 1,
			description: 'Pay credit card debts',
			done: true
		},
		{
			_id: 2,
			description: 'Meet with the team',
			done: false
		},
		{
			_id: 3,
			description: 'Appointment after lunch',
			done: false
		}
	]
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'DESCRIPTION_CHANGED':
			return { ...state, description: action.payload }
			break;
		case 'TODO_SEARCHED':
			return { ...state, list: action.payload.data }
		default:
			return state;
			break;
	}
}
