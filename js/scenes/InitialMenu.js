import React, { Component } from 'react';
import { View } from 'react-native';
import {OddMenuItem, EvenMenuItem} from '../components/MenuItem';
import BookDatabaseView from './BookDatabaseView';
import Camera from './Camera';

export default class InitialMenu extends Component {
  render() {
    return (
      <View style={{flex: 10}}>
        <OddMenuItem name='Search Book' onPress={this.props.onForward({sceneClass: BookDatabaseView})} />
        <EvenMenuItem name='Scan Book' onPress={this.props.onForward({sceneClass: Camera})} />
      </View>
    );
  }
};
