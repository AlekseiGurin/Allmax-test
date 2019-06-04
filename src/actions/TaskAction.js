import  { ADD_TASK, REMOVE_TASK, CHANGE_TASK_STATUS } from '../constants/constantsTask';

export const addTask = (task) => {
	return dispatch => {
		dispatch({
			type: ADD_TASK,
			payload: task,
		});
	};
};

export const removeTask = (id) => {
	return dispatch => {
		dispatch({
			type: REMOVE_TASK,
			payload: id,
		});
	};
};

export const changeTaskStatus = (id, status) => {
	return dispatсh => {
		dispatсh({
			type: CHANGE_TASK_STATUS,
			payload: { id, status },
		});
	};
};