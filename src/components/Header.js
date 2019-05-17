import React from 'react';

export default class Header extends React.Component {
  
  render() {
    return (
        <div className="header">
          <p>Список задач</p>
          <button 
            id="buttonAdd"
            onClick={()=>{this.props.onVisibleHandler()}}
          >Добавить</button>
        </div>
    );
  };
};



