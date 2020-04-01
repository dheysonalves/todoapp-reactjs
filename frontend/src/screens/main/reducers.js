import { combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer';

// Turn an object and his values as different reducers functions
const rootReducer = combineReducers({
	todo: todoReducer
})

export default rootReducer;
