import React, { Component } from 'react';
import { View } from 'react-native';
import {OddMenuItem, EvenMenuItem} from '../components/MenuItem';
import BookDatabaseView from './BookDatabaseView';
import Camera from './Camera';

export default class InitialMenu extends Component {
  render() {
    return (
      <View style={{flex: 10}}>
        <OddMenuItem name='Search Book' onForward={this.props.onForward(BookDatabaseView)} />
        <EvenMenuItem name='Scan Book' onForward={this.props.onForward(Camera)} />
      </View>
    );
  }
};
