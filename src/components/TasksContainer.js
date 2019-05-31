import React from 'react';
import Task from './Task.js';
import PropTypes from 'prop-types';

const TasksContainer = ({ tasksList, removeTask, changeStatusTask }) => {
	return (
	
	<div className="tasks-container">
 		{
 			tasksList.length ? (
 				tasksList.map(item => (
 					<Task 
 						changeStatusTask={changeStatusTask}
 						removeTask={removeTask}
 						key={item.id} 
 						task={item}
 					/>
 					))
 				) : (<div>Нет задач</div>)
 		}	
	</div>			
)}
	
TasksContainer.propTypes = {
	tasksList: PropTypes.arrayOf(PropTypes.object).isRequired,
	changeStatusTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired
};

export default TasksContainer;
