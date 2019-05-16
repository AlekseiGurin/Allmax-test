import React from 'react';

export default  class Task extends React.Component {
	
	handlerRemoveTask =(e)=> {
		const {id} = this.props
		console.log(id)
		this.props.removeTask(id,e)	 
	}

	handlerChangeStatusTask =(e)=> {
		console.log(this.props.status)
		const {status} = this.props
		const {id} = this.props
		this.props.changeStatusTask(status,id)

	}

    render () {
    	const {text}=this.props
        return (
            <div className="task" >
            	<div className={this.props.status.toLowerCase()}>
              		<input 
              			onChange={this.handlerChangeStatusTask}
              			type="checkbox" 
              		/>{text}
              	</div>
              	<button
              		onClick={this.handlerRemoveTask}
              	><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        )
    }
}
