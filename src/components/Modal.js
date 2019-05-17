import React from 'react';
import uuid from 'uuid';

export default class Modal extends React.Component {
	
	handleCreateTaskSubmit = (e)=> {
			e.preventDefault();
			if (this.textInput.value) {
				this.props.onAddTask({
					status: 'OPEN',
					id: uuid(),
					text: this.textInput.value	
					});
				this.props.onCloseHandler();
				} else {this.props.onCloseHandler()};	
		};

	handleClickCloseModal =(e)=> {
		const wrapper = document.getElementById('jsWrapper');
		const btnCancel = document.getElementById('cancel');
		if (e.target === wrapper || e.target === btnCancel){
			this.props.onCloseHandler();
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