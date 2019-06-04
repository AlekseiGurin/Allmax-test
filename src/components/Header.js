import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
        <div className="header">
          <p>Список задач</p>
          <button 
            id="buttonAdd"
            onClick={this.props.openCreateTaskModal}
          >Добавить</button>
        </div>
    );
  };
}

Header.propTypes = {
  openCreateTaskModal: PropTypes.func.isRequired
};

export default Header;