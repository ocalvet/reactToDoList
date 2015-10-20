import React from 'react';

class TodoItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {}
		this._removeItemFromParent = this._removeItemFromParent.bind(this);
	}
	
	_removeItemFromParent() {
		this.props.removeMe(this.props.item);
	}
	
	render() {
		return (
			<div class="todo-item">
				<h1>{this.props.item.title}</h1>
				<button onClick={this._removeItemFromParent}>X</button>
			</div>
		);
	}
}

export default TodoItem;