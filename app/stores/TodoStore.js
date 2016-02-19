import alt from '../alt';
import Actions from '../actions';

class TodoStore {
  constructor() {
    this.state = { user: null };
    this.bindListeners({
      login: Actions.login
    });
  }

  login(user) {
    console.log('user from firebase', user);
    this.setState({ user });
  }

}

export default alt.createStore(TodoStore);
