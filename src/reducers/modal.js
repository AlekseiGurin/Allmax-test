import { OPEN_CREATE_TASK_MODAL, CLOSE_CREATE_TASK_MODAL } from '../constants/constantsModal';

const initialState = {
	visibleModal: false,
};

export const modalReducer = (state = initialState, action) => {
	switch(action.type) {
		case OPEN_CREATE_TASK_MODAL: {
				return { ...state, visibleModal: true};
			}

		case CLOSE_CREATE_TASK_MODAL: {
			return { ...state,visibleModal:false };
		}

		default: {
			return state;
		}
	};
};