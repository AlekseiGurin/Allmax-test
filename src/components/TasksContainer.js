import React from 'react'
import Task from './Task.js'

export default class TasksContainer extends React.Component {
	
 	renderTask = (i) => {
 		const {onRemoveTask}=this.props
 		const {data}=this.props
 		let newTask = null
 		if (data.length) {
 			newTask = data.map(function(item){
 			return(<Task 
 						 removeTask={onRemoveTask}
 						 id={item.id}
 						 key={item.id} 
 						 text={item.text}
 					/>)
 	 		})
 		} else {return(<div>Нет задач</div>)}
 		return(newTask)
	}

	render() {
		return (
			<div className="tasks-container">
				{this.renderTask()}
			</div>
			)
	}
}