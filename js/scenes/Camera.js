import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import BookActionMenu from './BookActionMenu';
import MenuItem from '../components/MenuItem';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {bookId: ''};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center' }}>
        <TextInput
          style={{height: 40}}
          placeholder="Type bookId here!"
          onChangeText={(bookId) => {this.state.bookId =bookId;}}
        />
        <MenuItem name='Submit' onForward={() => {
          this.props.onForward({
          sceneClass: BookActionMenu,
          sceneState: {bookId: this.state.bookId}
        })();}} />
      </View>
    );
  }
}
