import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';
import Firebase from 'firebase';
import Login from './Login.jsx';
import _ from 'lodash';
import TodoStore from '../stores/TodoStore';

class TodoList extends React.Component {

	constructor(props) {
		super(props);

        this.state = {
            data: {},
            userData: TodoStore.getState()
        };

        this.firebaseRef = new Firebase('https://ocalvet-react-todo.firebaseio.com/todos');
        this.firebaseRef.on('child_added', (fbTodo) => {
            // Make sure we don't have the same element already displayed
            if (this.state.data[fbTodo.key()]) {
                return;
            }

            let todoVal = fbTodo.val();
            todoVal.key = fbTodo.key();
            this.state.data[todoVal.key] = todoVal;
            this.setState({
                data: this.state.data
            });

            console.log('data from firebase:', todoVal);
            });

            this.firebaseRef.on('child_removed', (fbTodo) => {
            let key = fbTodo.key();
            delete this.state.data[key];
            this.setState({
                data: this.state.data
            });
        });
    }

    componentDidMount() {
        TodoStore.listen(this.onChange.bind(this));
    }

    componentWillUnmount() {
        TodoStore.unlisten(this.onChange);
    }

    onChange(state) {
        console.log('on change called', state, this);
        this.setState({userData: state});
    }

    render() {
        console.log('user at render TodoList', this.state, this.props);
        var view = <Login />;

        if (this.state.userData.user) {
            var listItems = _.values(this.state.data).map((listItem) => {
            return <TodoItem
                        key={listItem.key}
                        item={listItem} />;
                });

            view = (
                <div style={{ padding: '20px' }}>
                        <TodoForm />
                {listItems}
                </div>
            );
        }


        return (
        <div style={{ padding: '20px' }}>
            {view}
        </div>
        );
    }
}

export default TodoList;
