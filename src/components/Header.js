import React from 'react';


export default class Header extends React.Component {
  
  
  onBtnClickHandler = (e) => {
    const {text,id} = this.props
     this.props.onAddTask({
      id: Math.random(), 
      text: "work"
     }) 
     
  }

  render() {
    const onAddTask = this.props.onAddTask

    return (
      <React.Fragment>
        <div className="header">
          <p>Список дел</p>
          <button 
            id="buttonAdd"
            onClick={this.onBtnClickHandler}
          >Добавить</button>
        </div>
      </React.Fragment>
    )
  }
}



