import React from "react"
import './App.css'
import Header from './components/Header.js'
import TasksContainer from './components/TasksContainer.js'
import Modal from './components/Modal.js'

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			visibleModal: false,
			tasks: []
		}
		this.removeTask=this.removeTask.bind(this)
	}

	modalVisibleHandler = () => {
		this.setState({visibleModal:true})
	}

	modalCloseHandler = () => {
		this.setState({visibleModal:false})
	}

	handleAddTask = (data) => {
		const newTasks = [data, ...this.state.tasks]
		this.setState({tasks: newTasks})
	}

	removeTask = (i) => {
		let lastTask = this.state.tasks
		console.log(id)
		lastTask.splice(i,1)
		this.setState({tasks: lastTask})
	}

	render() {	

		return (
			<div className="app">
				<Header onVisibleHandler={this.modalVisibleHandler} />
				<TasksContainer 
					onRemoveTask={this.removeTask}
					data={this.state.tasks} 
				/>
				{this.state.visibleModal && <Modal
					onCloseHandler={this.modalCloseHandler} 
					onAddTask={this.handleAddTask}
					dataModal={this.state}
				/>}
				
			</div>
		)
	};

}

  

