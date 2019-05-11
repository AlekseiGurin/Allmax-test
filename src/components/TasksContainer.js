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
 		console.log(newTask)
 		console.log(typeof(newTask))
 		console.log(newTask.length)
 		} else (alert("нет задач"))
 		return(newTask)
	}
	render() {

		console.log(this.renderTask())
		console.log(this.props.data)
		return (
			<div className="tasks-container">
				{this.renderTask()}
			</div>
			)
	}
}