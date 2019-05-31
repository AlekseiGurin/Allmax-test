export const SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL';

export const setVisibleModal = () => {
	return dispatch => {
		dispatch({
			type: SET_VISIBLE_MODAL,
		});
	};
};