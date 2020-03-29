import { combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer';

// Turn an object hat his values are different reducers functions
const rootReducer = combineReducers({
	todo: todoReducer
})

export default rootReducer;
