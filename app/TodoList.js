import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {data: [], nextId: 1};
		
		// Bind handlers to the this reference
		this._addItem = this._addItem.bind(this);
		this._removeItem = this._removeItem.bind(this);
	}
	
	_addItem(title) {
		console.log("Item to be added: ", title);
		this.state.data.push({
			id: this.state.nextId++,
			title: title
		});
		this.setState(this.state);
	}
	
	_removeItem(item) {
		console.log("Item to be removed: ", item);
		var itemIndex = this.state.data.indexOf(item);
		if (itemIndex > -1) {
			this.state.data.splice(itemIndex, 1);
			this.setState(this.state.data);
		}
	}
	
	render() {
		var todoList = this;
		
		var listItems = this.state.data.map((listItem) => {
			return <TodoItem item={listItem} removeMe={todoList._removeItem} />;
		});
		
		return (
			<div>
				<TodoForm addItem={this._addItem}/>
				{listItems}
			</div>
		);
	}
}

export default TodoList;