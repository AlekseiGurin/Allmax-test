export const REMOVE_TASK = 'REMOVE_TASK';

export const removeTask = (id) => {
	return dispatch => {
		dispatch({
			type: REMOVE_TASK,
			payload: id,
		});
	};
};