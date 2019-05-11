import React from 'react';

export default  class Task extends React.Component {
	

    render () {
    	console.log(this.props)
    	const {text}=this.props
        return (
            <div className="task" >
              <input type="checkbox" />
              <p>{text}</p>
            </div>
        )
    }
}
