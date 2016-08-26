import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import BookActionMenu from './BookActionMenu';
import MenuItem from '../components/MenuItem';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {bookId: ''};
        console.log(this.props);
  }
  onForward() {
    console.log(this.props);
    this.props.onForward(BookActionMenu)(this.state);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center' }}>
        <TextInput
          style={{height: 40}}
          placeholder="Type bookId here!"
          onChangeText={(bookId) => {this.state.bookId = bookId}}
        />
        <MenuItem name='Submit' onForward={this.onForward} />
      </View>
    );
  }
}
