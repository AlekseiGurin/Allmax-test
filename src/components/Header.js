import React from 'react';
import PropTypes from 'prop-types'

class Header extends React.Component {

  render() {
    return (
        <div className="header">
          <p>Список задач</p>
          <button 
            id="buttonAdd"
            onClick={this.props.openCreateTaskModalVisible}
          >Добавить</button>
        </div>
    );
  };
}

Header.propTypes = {
  openCreateTaskModalVisible: PropTypes.func.isRequired
};

export default Header;

