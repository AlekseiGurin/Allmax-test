export const ADD_TASK = 'ADD_TASK';

export const addTask = (task) => {
	return dispatch => {
		dispatch({
			type: ADD_TASK,
			payload: task,
		});
	};
};

