import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      value: ''
    };
	}
	
	_addItem = () => {
		// Get the input field
		this.props.addItem(this.state.value);
		this.state.value = "";
	}
	
	_onChange = (e) => {
    this.setState({
      value: e.target.value
    });
	}
	
	render() {
		return (
			<div>
				<TextField hintText="Enter Todo Item" value={this.state.value} onEnterKeyDown={this._addItem} onChange={this._onChange} />
				<RaisedButton label="Add Item" style={{ marginLeft: '10px' }} onClick={this._addItem} />
			</div>	
		);
	}
}

export default TodoForm;