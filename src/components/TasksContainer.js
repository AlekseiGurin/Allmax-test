import React from 'react';
import Task from './Task.js';

export default class TasksContainer extends React.Component {
	
 	renderTask = () => {
 		const {onChangeStatusTask,onRemoveTask,data} = this.props;
 		let newTask = null;
 		if (data.length) {
 			newTask = data.map(item => {
 			return(<Task 
 						 changeStatusTask={onChangeStatusTask}
 						 removeTask={onRemoveTask}
 						 key={item.id} 
 						 data={item}
 					/>);
 	 		});
 		} else {return(<div>Нет задач</div>)}
 		return(newTask);
	}

	render() {
		return (
			<div className="tasks-container">
				{this.renderTask()}
			</div>
			);
	};
};