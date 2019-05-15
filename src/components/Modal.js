import React from 'react'
import uuid from 'uuid';

export default class Modal extends React.Component {
	
	handleCreateTaskSubmit = (e)=> {
			e.preventDefault();
			if (this.textInput.value) {
				this.props.onAddTask({
					id: uuid(),
					text: this.textInput.value	
					})	
				this.props.onCloseHandler()
				} else {this.props.onCloseHandler()}	
		}

	handleClickCloseModal =(e)=> {
		const wrapper = document.getElementById('jsWrapper')
		if (e.target === wrapper){
			this.props.onCloseHandler()
		}
	}

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
				  		<button htmlype="submit">ok</button>
				  		<button>отмена</button> 
					</form>
				</div>
				</div>
			)
	}
}