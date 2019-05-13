import React from 'react';

export default  class Task extends React.Component {
	constructor () {
		super()
		this.state = {
			completed: false,
			deleted: false
		}
	}
	
	onChange =(event)=>{
		 console.log(event.currentTarget)
	}

    render () {
    	const {text}=this.props
        return (
            <div className="task" >
            	<div>
              		<input 
              			checked={this.state.completed}
              			type="checkbox" 
              		/>
              		{text}
              	</div>
              	<button
              		onClick={this.onChange}
              	><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        )
    }
}
