import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class MenuItem extends Component {
  customiseRender(options) {
    return (
      <TouchableHighlight onPress={this.props.onPress}
            style={{flex: 1,
              backgroundColor: options.backgroundColor,
              justifyContent: 'center'}}
            underlayColor='lightgrey'>
          <Text style={{textAlign: 'center', fontSize: 30}}>{this.props.name}</Text>
      </TouchableHighlight>
    )
  }
  render() {
      return this.customiseRender({
        backgroundColor: this.props.backgroundColor
      });
  }
}


export class OddMenuItem extends MenuItem {
  render() {
    return (this.customiseRender({
      backgroundColor: 'lightblue'
    }));
  }
}

export class EvenMenuItem extends MenuItem {
  render() {
    return this.customiseRender({
      backgroundColor: 'skyblue'
    });
  }
}
