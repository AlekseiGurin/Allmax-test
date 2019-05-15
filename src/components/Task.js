import React from 'react';

export default  class Task extends React.Component {
	constructor () {
		super()
		this.state = {
			deleted: false

		}
	}
	
	handlerRemoveTask =()=>{
		const {id} = this.props
		console.log(id)
		this.props.removeTask(id)	 
	}

    render () {
    	const {text}=this.props
        return (
            <div className="task" >
            	<div>
              		<input 
              			type="checkbox" 
              		/>
              		{text}
              	</div>
              	<button
              		onClick={this.handlerRemoveTask}
              	><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        )
    }
}
