import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  BackAndroid,
  TouchableHighlight } from 'react-native';
import InitialMenu from './js/scenes/InitialMenu';
import Titlebar from './js/components/Titlebar';

class AppNavigator extends Component {
  render () {
    return (
      <Navigator
        initialRoute={{
          sceneClass: InitialMenu
        }}
        renderScene={(route, navigator) => (
          <View style={{flex: 1}}>
            <Titlebar name={route.sceneClass.name}/>
            {(new route.sceneClass({
              onForward: (nextRoute) => () => {
                navigator.push(nextRoute);
              },
              sceneState: route.sceneState
            })).render()}
          </View>
        )}
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AppNavigator);
