/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import {Stack} from '../Navigator/StackNavigator'
import Home from '../Home/2cmHome'
import HomeDetails from '../Home/2cmHomeDetails'
import Mine from '../Mine/2cmMine'
import Shop from '../Shop/2cmShop'
import More from '../More/2cmMore'
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedTab:'home',
    }
  } 
  render() {
    return (
        <Stack/>
    );
  }
}

const styles = StyleSheet.create({
    IconStyle:{
        width:Platform.os == 'ios'? 30:25,
        height:Platform.os == 'ios'? 30:25
    }
});

