import React from 'react';

export default class Header extends React.Component {
  
  onBtnClickHandler = () => {
    const tascId = 1;
    let jsContent = document.getElementById('content');
    console.log(jsContent);
    let divTasc = document.createElement('div');
    console.log(divTasc);
    divTasc.className ='tasc';
    divTasc.id = tascId;
    jsContent.appendChild(divTasc);
  };

  render() {
    return (
      <div className="header">
        <p>Список дел</p>
        <button 
          id="buttonAdd"
          onClick={this.onBtnClickHandler}
        >Добавить</button>
      </div>
    )
  }
}

