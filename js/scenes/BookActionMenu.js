import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BookActionConfirmation from './BookActionConfirmation';
import {OddMenuItem, EvenMenuItem} from '../components/MenuItem';


export default class BookActionMenu extends Component {
  constructor(props){
    super(props);
    // this.props.sceneState.status // state passed from previous scene
  }
  render() {
    return (
      <View style={{flex: 10}}>
        <Text> The selected bookId is {this.props.sceneState.status}</Text>
        <Text>The status of the book is...</Text>
        <OddMenuItem name='Add to library' onForward={this.props.onForward(BookActionConfirmation)} />
        <EvenMenuItem name='Borrow Book' onForward={this.props.onForward(BookActionConfirmation)} />
        <OddMenuItem name='Return Book' onForward={this.props.onForward(BookActionConfirmation)} />
      </View>
    );
  }
}
