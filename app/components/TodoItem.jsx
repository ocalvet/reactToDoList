import React from 'react';
import { Card, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';


class TodoItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
    this.firebaseRef = new Firebase(`https://ocalvet-react-todo.firebaseio.com/todos/${this.props.item.key}`);
	}

	_remove() {
    console.log('removing', this.props.item);
    this.firebaseRef.remove();
	}

	render() {
    var cardStyle = {
      marginTop: '5px'
    };

		return (
			<Card style={cardStyle}>
        <CardTitle>{this.props.item.title}</CardTitle>
        <CardActions>
          <FlatButton label="Edit" disable={true} />
          <FlatButton label="Remove" onClick={this._remove.bind(this)} />
        </CardActions>
      </Card>
		);
	}
}

export default TodoItem;
