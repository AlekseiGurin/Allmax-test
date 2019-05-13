import React from 'react';

export default class Header extends React.Component {
  
  onBtnClickHandler = () => {
        this.props.onVisibleHandler()
  }

  render() {

    return (
        <div className="header">
          <p>Список задач</p>
          <button 
            id="buttonAdd"
            onClick={this.onBtnClickHandler}
          >Добавить</button>
        </div>
    )
  }
}



