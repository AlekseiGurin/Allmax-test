import React from 'react';
import Task from './Task.js';
import PropTypes from 'prop-types';

const TasksContainer = ( {changeStatusTask, removeTask, taskList} ) => (
	<div className="tasks-container">
 		{
 			taskList.length ? (
 				taskList.map(item => (
 					<Task 
 						 changeStatusTask={changeStatusTask}
 						 removeTask={removeTask}
 						 key={item.id} 
 						 taskList={item}
 					/>
 					))
 				) : (<div>Нет задач</div>)
 		}	
	</div>			
);
	
TasksContainer.propTypes = {
	taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
	changeStatusTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired
};

export default TasksContainer;
