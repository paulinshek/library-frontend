import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InitialMenu from './InitialMenu';
import MenuItem from '../components/MenuItem';
import BookList from '../components/BookList';

export default class BookDatabaseView extends Component {
  render() {
    return (
      <View style={{flex: 10}}>
        <BookList />
        <MenuItem name='Return home' onPress={this.props.onForward({sceneClass: InitialMenu})} />
      </View>
    );
  }
}
