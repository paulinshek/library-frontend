import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';


class BookItem extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize:20, fontWeight: 'bold', textAlign: 'left'}}>{this.props.data.title + ' by ' + this.props.data.author}</Text>
        <Text style={{textAlign: 'right'}}>{'bookId: ' + this.props.data.bookId + ', ISBN: ' + this.props.data.isbn}</Text>
      </View>
    )
  }
}


export default class BookList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(
        [{bookId: 1, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 2, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 3, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 4, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 5, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 6, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 7, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 8, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 9, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 10, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 11, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 12, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 13, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 14, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 15, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 16, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 17, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 18, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 19, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 20, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 21, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 22, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 23, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 24, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 25, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 26, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 27, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 28, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 29, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 30, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 40, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 41, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 42, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 43, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 44, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 45, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 46, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 47, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 48, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'},
          {bookId: 49, isbn: '123ABC', title: 'After Dark', author: 'Murukami'},
          {bookId: 50, isbn: '124AHD', title: 'Rebecca', author: 'Daphne du Maurier'},
          {bookId: 51, isbn: '532GDS', title: 'A Riot of Golfish', author: 'Katomoto'}]
      )
    };
  }
  render() {
    return (
      <View style={{paddingTop: 22, flex: 10}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <BookItem data={rowData}/>}
        />
      </View>
    );
  }
}
