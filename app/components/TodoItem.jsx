import React from 'react';
import { Card, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';

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
    var cardStyle = {
      marginTop: '5px'
    };
    
		return (
			<Card style={cardStyle}>
        <CardTitle>{this.props.item.title}</CardTitle>
        <CardActions>
          <FlatButton label="Edit" disable={true} />
          <FlatButton label="Remove" onClick={this._removeItemFromParent} />
        </CardActions>
      </Card>
		);
	}
}

export default TodoItem;