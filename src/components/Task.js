import React from 'react';
import PropTypes from 'prop-types';

export default  class Task extends React.Component {
	
	handlerRemoveTaskClick = () => {
		const { id } = this.props.task;
		this.props.removeTask(id);	 
	};

	handlerChangeStatusTask = () => {
		const { id } = this.props.task;
		this.props.changeStatusTask(id);
	};

    render () {
    	const { text, status } = this.props.task;
        return (
            <div className="task" >
            	<div className={status.toLowerCase()}>
              		<input 
              			onChange={this.handlerChangeStatusTask}
              			type="checkbox" 
              		/>
              		{text}
              	</div>
              	<button
              		onClick={this.handlerRemoveTaskClick}
              	><i className="fa fa-trash-o" aria-hidden="true" /></button>
            </div>
        );
    };
}

Task.propTypes = {
	task: PropTypes.shape(
			{
				status: PropTypes.string,
				id: PropTypes.string,
				text: PropTypes.node
			}
		).isRequired,
	removeTask: PropTypes.func.isRequired,
	changeStatusTask: PropTypes.func.isRequired
};