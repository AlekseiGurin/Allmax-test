import { OPEN_CREATE_TASK_MODAL, CLOSE_CREATE_TASK_MODAL } from '../constants/constantsModal';

export const openCreateTaskModal = () => {
	return dispatch => {
		dispatch({
			type: OPEN_CREATE_TASK_MODAL,
		});		
	};
};

export const closeCreateTaskModal = () => {
	return dispatch => {
		dispatch({
			type: CLOSE_CREATE_TASK_MODAL,
		});
	};
};