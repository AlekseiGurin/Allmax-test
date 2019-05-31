import { ADD_TASK } from '../actions/AddTaskAction';
import { REMOVE_TASK } from '../actions/RemoveTaskAction';
import { CHANGE_STATUS_TASK } from '../actions/ChangeStatusTaskAction';

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

		case CHANGE_STATUS_TASK: {
			const { id } = action.payload;
			const updateTask = state.tasksList.map(task => {
				if (task.id === id) {
					task.status === 'OPEN' ? task.status = 'DONE' : task.status = 'OPEN';
				};
				return task;
			});
			return { ...state, tasksList: updateTask };
		}

		default: 
			return state;
	}
};