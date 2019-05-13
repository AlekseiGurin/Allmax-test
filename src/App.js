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
			task: []
		}
	}

	modalVisibleHandler = () => {
		this.setState({visibleModal:true})
	}

	modalCloseHandler = () => {
		this.setState({visibleModal:false})
	}

	handleAddTask = (data) => {
		const newTask = [data, ...this.state.task]
		this.setState({task: newTask})
		console.log(newTask)
	}

	removeTask =()=> {
		
	}

	render() {	

		return (
			<div className="app">
				<Header onVisibleHandler={this.modalVisibleHandler} />
				<TasksContainer data={this.state.task} />
				{this.state.visibleModal && <Modal
					onCloseHandler={this.modalCloseHandler} 
					onAddTask={this.handleAddTask}
					dataModal={this.state}
				/>}
				
			</div>
		)
	};

}

  

