import React from "react";
import './App.css';
import Header from './components/Header.js';
import TasksContainer from './components/TasksContainer.js';
import Modal from './components/Modal.js';

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			visibleModal: false,
			tasks: []
		};
	};

	openCreateTaskModalVisible = () => {
		this.setState({ visibleModal: true });
	};

	closeCreateTaskModal = () => {
		this.setState({ visibleModal: false });
	};

	addTask = (task) => {
		const newTasks = [task, ...this.state.tasks];
		this.setState({ tasks: newTasks });
	};

	removeTask = (id) => {
		const newTask = this.state.tasks.filter(task => task.id !== id);
		this.setState({ tasks: newTask });
	};

	changeStatusTask = (status,id) => {
		this.setState(prevState => {
			const updateTask = prevState.tasks.map(task => {
				if (task.id === id) {
					task.status === 'OPEN' ? task.status = 'DONE' : task.status = 'OPEN'
				}
				return task;
			});
			return {tasks: updateTask};
		});
		
	};

	render() {	

		return (
			<div className="app">
				<Header openCreateTaskModalVisible={this.openCreateTaskModalVisible} />
				<TasksContainer 
				    changeStatusTask={this.changeStatusTask}
					removeTask={this.removeTask}
					taskList={this.state.tasks} 
				/>
				{this.state.visibleModal && 
					<Modal
						closeCreateTaskModal={this.closeCreateTaskModal} 
						addTask={this.addTask}
						dataModal={this.state}
					/>
				}
				
			</div>
		);
	};
}

  

