import React from "react";
import './App.css';
import Header from '../components/Header';
import TasksContainer from '../components/TasksContainer';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openCreateTaskModal, closeCreateTaskModal } from '../actions/ModalAction';
import { addTask, removeTask, changeTaskStatus } from '../actions/TaskAction';

class App extends React.Component {

	render() {	
      const { 
      	tasksList, 
      	openCreateTaskModal, 
      	closeCreateTaskModal,
      	addTask,
      	removeTask,
      	changeTaskStatus 
      } = this.props;
		return (
			<div className="app">
				<Header openCreateTaskModal={openCreateTaskModal}/>
				<TasksContainer 
					tasksList={tasksList}
					removeTask={removeTask}
					changeTaskStatus={changeTaskStatus}
				/>
				{this.props.visibleModal && 
					<Modal
						addTask={addTask}
						closeCreateTaskModal={closeCreateTaskModal} 
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
		openCreateTaskModal, 
		closeCreateTaskModal,
		addTask,
		removeTask,
		changeTaskStatus, 
	},dispatch)	
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App)
	