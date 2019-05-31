import { combineReducers } from 'redux';
import { modalReducer } from './modal';
import { taskContainerReducer } from './taskContainer';

export const rootReducer = combineReducers({
	modal: modalReducer,
	taskContainer: taskContainerReducer,
});
	
