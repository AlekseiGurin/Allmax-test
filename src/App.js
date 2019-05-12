import React from "react"
import './App.css'
import Header from './components/Header.js'
import TasksContainer from './components/TasksContainer.js'
import Modal from './components/Modal.js'

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			displeyModal: "displey-none",
			task: []
		}
	}

	handleAddTask = data => {
		const newTask = [data, ...this.state.task]
		this.setState({task: newTask})

	}

	render() {	

		return (
			<div className="app">
				<Header onAddTask={this.handleAddTask} />
				<TasksContainer data={this.state.task} />
				<Modal 
					dataModal={this.state}
					className={this.state.displeyModal}
				/>
			</div>
		)
	};

}

  

