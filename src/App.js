import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';


export default class BigApp extends React.Component {
  render() {

  	const lol = 'kek';
    return (
      <div className="big-app">
      	<Header />
      	<Content />
      </div>
    )
  }
};
render(
  <BigApp />,
  document.getElementById('root')
);
