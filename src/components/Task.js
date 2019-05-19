import React from 'react';
import PropTypes from 'prop-types';

export default  class Task extends React.Component {
	
	handlerRemoveTask =(e)=> {
		const {id} = this.props.taskList;
		this.props.removeTask(id,e);	 
	};

	handlerChangeStatusTask =(e)=> {
		const {status,id} = this.props.taskList;
		this.props.changeStatusTask(status,id);

	};

    render () {
    	const {text,status}=this.props.taskList;
        return (
            <div className="task" >
            	<div className={status.toLowerCase()}>
              		<input 
              			onChange={this.handlerChangeStatusTask}
              			type="checkbox" 
              		/>{text}
              	</div>
              	<button
              		onClick={this.handlerRemoveTask}
              	><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        );
    };
};

Task.propTypes = {
	taskList: PropTypes.shape(
			{
				status: PropTypes.string.isRequired,
				id: PropTypes.string.isRequired,
				text: PropTypes.node.isRequired
			}
		),
	removeTask: PropTypes.func.isRequired,
	changeStatusTask: PropTypes.func.isRequired
};