import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InitialMenu from './InitialMenu';
import MenuItem from '../components/MenuItem';

export default class BookActionConfirmation extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center' }}>
        <Text>BookActionConfirmation</Text>
        <MenuItem name='Return home' onForward={this.props.onForward({sceneClass: InitialMenu})} />
      </View>
    );
  }
}
