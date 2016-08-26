import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Titlebar extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        height: 30 }}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{this.props.name}</Text>
      </View>
    )
  }
}
