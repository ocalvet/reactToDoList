import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.jsx';
import {AppBar} from 'material-ui';
require('./styles/main.scss');

ReactDOM.render(
  <div>
    <AppBar title="Todo List App" />
    <TodoList />
  </div>,
	document.getElementById('react-app')
);
