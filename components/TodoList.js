import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {actionCreators} from '../redux/reducers/todos';
import store from '../redux/store/store';

export default class List extends Component {
  onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index));
  };
  renderItem = (text, i) => {
    const {onPressItem} = this.props;
    return (
      <View style={{flexDirection: 'row', alignContent: 'center'}}>
        <TouchableOpacity style={styles.item}>
          <Text>{text}</Text>
        </TouchableOpacity>
        <View style={{color: 'red'}}>
          <TouchableOpacity onPress={this.onRemoveTodo}>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    const {list} = this.props;
    return <View>{list.map(this.renderItem)}</View>;
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
});
