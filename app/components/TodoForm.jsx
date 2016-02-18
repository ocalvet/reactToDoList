import React from 'react';
import { RaisedButton, TextField } from 'material-ui';
import Firebase from 'firebase';
import trim from 'trim';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      title: ''
    };
    this.firebaseRef = new Firebase('https://ocalvet-react-todo.firebaseio.com/todos')
	}

  _addItem = (e) => {
    console.log('event adding', e);
    if (trim(this.state.title) != '') {
      // Get the input field
      e.preventDefault();
      this.firebaseRef.push({
        title: this.state.title,
        completed: false,
        description: 'default description'
      });

      // this.props.addItem(this.state.title);
      this.state.title = "";
    }
	}

	_onChange = (e) => {
    this.setState({
      title: e.target.value
    });
	}

	render() {
		return (
			<div>
        <TextField
          hintText="Enter Todo Item"
          value={this.state.title}
          onEnterKeyDown={this._addItem.bind(this)}
          onChange={this._onChange.bind(this)} />
        <RaisedButton
          label="Add Item"
          style={{ marginLeft: '10px' }}
          onClick={this._addItem.bind(this)} />
			</div>
		);
	}
}

export default TodoForm;
