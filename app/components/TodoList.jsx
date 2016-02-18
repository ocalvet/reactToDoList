import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';
import Firebase from 'firebase';
import _ from 'lodash';


class TodoList extends React.Component {

	constructor(props) {
		super(props);

    this.state = {
      data: []
    };

    this.firebaseRef = new Firebase('https://ocalvet-react-todo.firebaseio.com/todos');
    this.firebaseRef.on('value', (data) => {
      var todosVal = data.val();
      let todos = _(todosVal)
        .keys()
        .map((key) => {
          let clonedTodo = _.clone(todosVal[key]);
          clonedTodo.key = key;
          return clonedTodo;
        })
        .value();

      console.log('data from firebase:', todos);
      this.setState({
        data: todos
      });
    });
	}

	render() {
		var todoList = this;

		var listItems = this.state.data.map((listItem) => {
      return <TodoItem 
                key={listItem.key} 
                item={listItem} />;
		});

		return (
			<div style={{ padding: '20px' }}>
				<TodoForm />
				{listItems}
			</div>
		);
	}
}

export default TodoList;
