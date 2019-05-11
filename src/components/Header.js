import React from 'react';


export default class Header extends React.Component {
  
  
  onBtnClickHandler = (e) => {
    console.log(this.props.onAddTask)
    const {text,id} = this.props
    console.log(text)
     this.props.onAddTask({
      id: Math.random(),
      text: "work"
     }) 
  }

  render() {
    const onAddTask = this.props.onAddTask
    console.log(onAddTask)
    console.log(this.props)
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



