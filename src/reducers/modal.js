import { SET_VISIBLE_MODAL } from '../actions/ModalOpenAction';
import {  SET_CLOSE_MODAL } from '../actions/ModalAction';

const initialState = {
	visibleModal: false,
};

export const modalReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_VISIBLE_MODAL: {
				return { ...state, visibleModal: true};
			}

		case SET_CLOSE_MODAL: {
			return { ...state,visibleModal:false };
		}

		default: {
			return state;
		}
	};
};