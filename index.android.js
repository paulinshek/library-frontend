import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  BackAndroid,
  TouchableHighlight } from 'react-native';
import InitialMenu from './app/scenes/InitialMenu';
import Titlebar from './app/components/Titlebar';

class AppNavigator extends Component {
  render () {
    return (
      <Navigator
        initialRoute={{
          sceneClass: InitialMenu,
          sceneState: {}
        }}
        renderScene={(route, navigator) => (
          <View style={{flex: 1}}>
            <Titlebar name={route.sceneClass.name}/>
            {(new route.sceneClass({
              onForward: (nextScene) => (nextState) => {
                newRoute = {
                  sceneClass: nextScene,
                  sceneState: nextState
                };
                navigator.push(newRoute);
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
