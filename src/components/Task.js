import React from 'react';
import PropTypes from 'prop-types';

export default  class Task extends React.Component {
	
	handlerRemoveTaskClick = () => {
		const { id } = this.props.task;
		this.props.removeTask(id);	 
	};

	handlerChangeStatusTask = () => {
		let { id, status } = this.props.task;
		const chbox = document.getElementById('jsChecked');
		if(chbox.checked) {
			status = 'DONE';
		} else {
			status = 'OPEN';
		};
		this.props.changeTaskStatus(id, status);
	};

    render () {
    	const { text, status } = this.props.task;
        return (
            <div className="task" >
            	<div className={status.toLowerCase()}>
              		<input 
              			id="jsChecked"
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
				text: PropTypes.string
			}
		).isRequired,
	removeTask: PropTypes.func.isRequired,
	changeTaskStatus: PropTypes.func.isRequired
};