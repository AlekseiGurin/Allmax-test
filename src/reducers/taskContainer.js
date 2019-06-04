import { ADD_TASK, REMOVE_TASK, CHANGE_TASK_STATUS } from '../constants/constantsTask';

const initialState = {
	tasksList: [],
};

export const taskContainerReducer = (state = initialState,action) => {
	switch(action.type) {
		case ADD_TASK:
			{
				const task = action.payload;
				const newTasklist = [ task, ...state.tasksList ];
				return { ...state, tasksList: newTasklist };
			}

		case REMOVE_TASK: 
			{
				const id = action.payload;
				const newTasklist = state.tasksList.filter(task => task.id !== id);
				return { ...state, tasksList: newTasklist };
			}

		case CHANGE_TASK_STATUS: {
			const { id, status } = action.payload;
			const updateTask = state.tasksList.map(task => {
				if (task.id === id) {
					task.status = status;
				};
				return task;
			});
			return { ...state, tasksList: updateTask };
		}

		default: 
			return state;
	}
};