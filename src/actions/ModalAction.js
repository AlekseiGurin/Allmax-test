export const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL';

export const setCloseModal = () => {
	return dispatch => {
		dispatch({
			type: SET_CLOSE_MODAL,
		});
	};
};