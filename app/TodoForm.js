import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this._addItem = this._addItem.bind(this);	
		this._keyUp = this._keyUp.bind(this);	
	}
	
	_addItem() {
		// Get the input field
		var itemInput = this.refs.todoItemInput;
		this.props.addItem(itemInput.value);
		itemInput.value = "";
	}
	
	_keyUp(e) {
		if (e.keyCode === 13) {
			this._addItem();
		}
	}
	
	render() {
		return (
			<div>
				<input type="text" placeholder="Enter Todo Item" ref="todoItemInput" onKeyUp={this._keyUp} />
				<button onClick={this._addItem}>Add Item</button>
			</div>	
		);
	}
}

export default TodoForm;