import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {actionCreators} from '../redux/reducers/todos';
import List from './TodoList';
import Input from './Input';
import Title from './Title';
import store from '../redux/store/store';
export default class App extends React.Component {
  state = {};
  unsubscribe = store.subscribe(() => {
    const {todos} = store.getState();
    this.setState({todos});
  });
  componentWillMount() {
    const {todos} = store.getState();
    this.setState({todos});
  }
  componentWillUnmount() {
    unsubscribe();
  }
  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text));
  };

  render() {
    const {todos} = this.state;
    return (
      <View>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos}></List>
      </View>
    );
  }
}
