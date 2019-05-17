import React from 'react';

export default  class Task extends React.Component {
	
	handlerRemoveTask =(e)=> {
		const {id} = this.props.data;
		this.props.removeTask(id,e);	 
	};

	handlerChangeStatusTask =(e)=> {
		const {status,id} = this.props.data;
		this.props.changeStatusTask(status,id);

	};

    render () {
    	const {text,status}=this.props.data;
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
