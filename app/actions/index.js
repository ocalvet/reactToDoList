import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  login(args) {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://ocalvet-react-todo.firebaseio.com')
      firebaseRef.authWithOAuthPopup('facebook', (error, user) => {
        if (error) {
          return;
        }

        dispatch(user);
      }, {
        scope: "email,user_likes" // the permissions requested
      });
    }
  }
}

export default alt.createActions(Actions);
