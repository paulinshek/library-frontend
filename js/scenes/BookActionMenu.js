import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import BookActionConfirmation from './BookActionConfirmation';
import {OddMenuItem, EvenMenuItem} from '../components/MenuItem';


export default class BookActionMenu extends Component {
  constructor(props){
    super(props);
    // get status of the book
    // which menu items should be displayed?
    this.state = {
        addLibrary: true,
        borrowBook: true,
        returnBook: true,
        showModal: false
    }

    this.addToLibrary = this.addToLibrary.bind(this);
    this.submitBorrowerName = this.submitBorrowerName.bind(this);
    this.flipModal = this.flipModal.bind(this);
    this.returnBook = this.returnBook.bind(this);
  }
  addToLibrary() {
    // api call

    this.props.onForward({
      sceneClass: BookActionConfirmation,
      sceneState: {message: bookTitle + ' has been added to the library'}
    })();
  }
  submitBorrowerName() {
    // api call

    this.props.onForward({
      sceneClass: BookActionConfirmation,
      sceneState: {message: 'Book has been checked out successfully. Happy learning! :)'}
    })();
  }
  flipModal() {
    console.log(this);
    let newState = !this.state.showModal;
    this.setState({showModal: newState});
  }
  returnBook() {
    this.props.onForward({
      sceneClass: BookActionConfirmation,
      sceneState: {message: 'Thank you for returning the book.'}
    })();
  }
  render() {
    return (
      <View style={{flex: 10}}>
        <Text> The selected bookId is {this.props.sceneState.bookId}</Text>
        <Text>The status of the book is...</Text>

        {this.state.addLibrary ?
          (<OddMenuItem name='Add to library' onPress={this.addToLibrary} />) : null }
        {this.state.borrowBook ?
          (<EvenMenuItem name='Borrow Book' onPress={this.flipModal} />) : null }
        {this.state.returnBook ?
          (<OddMenuItem name='Return Book' onPress={this.returnBook} />) : null }

        <Modal
          animationType={'none'}
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={this.submitBorrowerName}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.flipModal();
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

      </View>
    );
  }
}
