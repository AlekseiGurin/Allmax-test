import React from 'react'
import Task from './Task.js'

export default class TasksContainer extends React.Component {
 	renderTask = () => {
 		const {data}=this.props
 		let newTask = null
 		if (data.length) {
 			newTask = data.map(function(item){
 			return(<Task key={item.id} text={item.text} />)
 	 		})
 		} else (alert("нет задач"))
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