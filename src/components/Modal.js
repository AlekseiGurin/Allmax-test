import React from 'react'
import uuid from 'uuid';

export default class Modal extends React.Component {
	constructor() {
		super()
		this.state = {
			textAdd: ""
		}
	}
	
	handleChange =(event)=> {
		const wrapper = document.getElementById('jsWrapper')
		if (event.target === wrapper) {
			this.props.onCloseHandler()
		} else {
			let textTasc = event.target.value
		this.setState({textAdd: textTasc})
		}			
	} 

	handleClick = ()=> {
			this.props.onAddTask({
				id: uuid(),
				text: this.state.textAdd
			})
			this.props.onCloseHandler()
		}

	handleClickClose = () => {
		this.props.onCloseHandler()
	}

	render() {
		return(
				<div 
					id="jsWrapper" 
					className="modal-wrapper"
					onClick={this.handleChange}
				>
				<div className="modal-container">
				  <input 
				  	type="text" 
				  	placeholder="Введите задачу"
				  	onChange={this.handleChange} 
				  />
				  <button onClick={this.handleClick}>ok</button>
				  <button onClick={this.handleClickClose}>отмена</button> 
				</div>
				</div>
			)
	}
}