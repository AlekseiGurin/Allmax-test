import React from 'react'

export default class Modal extends React.Component {
	constructor() {
		super()
		this.state = {
			textAdd: ""
		}
	}
	handleChange =(event)=> {
		let textTasc = event.target.value
		this.setState({textAdd: textTasc})		
	} 

	handleClick = ()=> {
			console.log(this.state.textAdd)
			const {dataModal} = this.props
			console.log(dataModal.task)
		}


	render() {
		return(

				<div className="modal-container">
				  <input 
				  	type="text" 
				  	placeholder="Введите задачу"
				  	onChange={this.handleChange} 
				  />
				  <button onClick={this.handleClick}>ok</button>
				  <button>отмена</button> 
				</div>
			)
	}
}