import React from "react";
import './App.css';
import Header from '../components/Header';
import TasksContainer from '../components/TasksContainer';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import { setVisibleModal } from '../actions/ModalOpenAction';
import { bindActionCreators } from 'redux';
import { setCloseModal } from '../actions/ModalAction';
import { addTask } from '../actions/AddTaskAction';
import { removeTask } from '../actions/RemoveTaskAction';
import { changeStatusTask } from '../actions/ChangeStatusTaskAction';

class App extends React.Component {

	changeStatusTask = () => {
		/*this.setState(prevState => {
			const updateTask = prevState.tasks.map(task => {
				if (task.id === id) {
					task.status === 'OPEN' ? task.status = 'DONE' : task.status = 'OPEN'
				}
				return task;
			});
			return {tasks: updateTask};
		});*/
	};
	render() {	
      const { 
      	tasksList, 
      	setVisibleModal, 
      	setCloseModal,
      	addTask,
      	removeTask,
      	changeStatusTask 
      } = this.props;
		return (
			<div className="app">
				<Header openCreateTaskModalVisible={setVisibleModal}/>
				<TasksContainer 
					tasksList={tasksList}
					removeTask={removeTask}
					changeStatusTask={changeStatusTask}
				/>
				{this.props.visibleModal && 
					<Modal
						addTask={addTask}
						closeCreateTaskModal={setCloseModal} 
					/>
				}
				
			</div>
		);
	};
}

const mapStateToProps = store => {
	return {
		visibleModal: store.modal.visibleModal,
		tasksList: store.taskContainer.tasksList
	}
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setVisibleModal, 
		setCloseModal,
		addTask,
		removeTask,
		changeStatusTask, 
	},dispatch)	
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App)
	