import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

 class Modal extends React.Component {
	
	handleCreateTaskSubmit = (e) => {
			e.preventDefault();
			if (this.textInput.value) {
				this.props.addTask({
					status: 'OPEN',
					id: uuid(),
					text: this.textInput.value	
					});
				this.props.closeCreateTaskModal();
				} else {this.props.closeCreateTaskModal()};	
		};

	handleClickCloseModal = (e) => {
		const wrapper = document.getElementById('jsWrapper');
		const btnCancel = document.getElementById('cancel');
		if (e.target === wrapper || e.target === btnCancel){
			this.props.closeCreateTaskModal();
		};
	};

	render() {
		return(
			<div 
				onClick={this.handleClickCloseModal}
				id="jsWrapper" 
				className="modal-wrapper"
			>
			<div 
				className="modal-container"	
			>
				<form onSubmit={this.handleCreateTaskSubmit}>
				  	<input 
				  		ref={(input)=> {this.textInput=input}}
				  		id="jsInput"
				  		type="text" 
				  		placeholder="Введите задачу"
				  	/>
				  	<button id="btnSubmit" htmlype="submit">ok</button>
				  	<button type="button" id="cancel" >отмена</button> 
				</form>
			</div>
			</div>
			);
	};
};

Modal.propTypes = {
	closeCreateTaskModal: PropTypes.func.isRequired,
	addTask: PropTypes.func.isRequired
};

export default Modal;