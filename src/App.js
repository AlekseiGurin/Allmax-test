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
		this.removeTask=this.removeTask.bind(this)
	};

	openCreateTaskModalVisible = () => {
		this.setState({visibleModal:true})
	};

	closeCreateTaskModal= () => {
		this.setState({visibleModal:false})
	};

	addTask = (taskList) => {
		const newTasks = [taskList, ...this.state.tasks]
		this.setState({tasks: newTasks})
		console.log(taskList)
	};

	removeTask = (id) => {
		const lastTask = this.state.tasks.filter(task=>task.id !== id)
		this.setState({tasks:lastTask})
	};

	changeStatusTask = (status,id) => {
		this.setState(prevState => {
			const updateTask = prevState.tasks.map(task=>{
				if (task.id === id) {
					task.status='DONE';
				};
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
};

  

