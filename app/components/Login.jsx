import React from 'react';
import { Card, CardTitle, CardActions, RaisedButton } from 'material-ui';
import Actions from '../actions';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick() {
    Actions.login();
  }

  render() {

    return (
      <Card>
        <CardTitle>To be able to use this application you need to login using your Facebook account</CardTitle>
        <CardActions>
          <RaisedButton onClick={this.onClick.bind(this)} label="Click here to login" secondary={true} />
        </CardActions>
      </Card>
    );
  }

}

export default Login;
