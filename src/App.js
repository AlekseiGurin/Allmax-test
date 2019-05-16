import React from "react"
import './App.css'
import Header from './components/Header.js'
import TasksContainer from './components/TasksContainer.js'
import Modal from './components/Modal.js'

export default class App extends React.Component {

	constructor(props) {
		super(props)
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

	removeTask = (id) => {
		const lastTask = this.state.tasks.filter(task=>task.id !== id)
		this.setState({tasks:lastTask})
	}

	changeStatusTask = (status,id) => {
		this.setState(prevState => {
			const updateTask = prevState.tasks.map(task=>{
				if (task.id === id) {
					console.log (task.status);
					task.status='DONE';
				}
				return task;
			})
			return {tasks: updateTask};
		})
		
	}

	render() {	

		return (
			<div className="app">
				<Header onVisibleHandler={this.modalVisibleHandler} />
				<TasksContainer 
				    onChangeStatusTask={this.changeStatusTask}
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

  

