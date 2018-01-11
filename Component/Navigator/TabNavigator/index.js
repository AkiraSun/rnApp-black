/**
 * Created by akira on 2018/01/07.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Platform,
  } from 'react-native';
import {TabNavigator} from 'react-navigation'
import Home from '../../Home/2cmHome'
import Shop from '../../Shop/2cmShop'
import Mine from '../../Mine/2cmMine'
import More from '../../More/2cmMore'
const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image  style={[styles.IconStyle,{tintColor: tintColor}]} source={ {uri:'icon_tabbar_homepage'}} />
      )
    }),
  },
  Shop: {
    screen: Shop,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Shop',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image style={[styles.IconStyle,{tintColor: tintColor}]} source={ {uri:'icon_tabbar_merchant_normal'}} />
      )
    }),
  },
  Mine: {
    screen: Mine,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Mine',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image style={[styles.IconStyle,{tintColor: tintColor}]} source={ {uri:'icon_tabbar_mine'}} />
      )
    }),
  },
  More: {
    screen: More,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'More',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image style={[styles.IconStyle,{tintColor: tintColor}]} source={ {uri:'icon_tabbar_misc'}} />
      )
    }),
  }
}

const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    animationEnabled: true,
  },
}

const TabBar = TabNavigator(RouteConfigs, TabNavigatorConfigs)

export {TabBar}

const styles = StyleSheet.create({
    IconStyle:{
        width:Platform.os == 'ios'? 30:25,
        height:Platform.os == 'ios'? 30:25
    }
});

