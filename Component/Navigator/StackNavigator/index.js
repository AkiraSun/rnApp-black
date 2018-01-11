/**
 * Created by akira on 2018/01/07.
 */
import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {TabBar} from '../TabNavigator'
import HomeDetails from '../../Home/2cmHomeDetails'
const RouteConfigs = {
  Home: {
    screen: TabBar,
    navigationOptions: {
      header:null,
      // headerStyle: {height: 44,backgroundColor:'#FC6120'},
    },
  },
  HomeDetails: {
    screen: HomeDetails,
    navigationOptions: {
      title: 'HomeDetails',
    }
  }
}

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    headerTitleStyle: {fontSize: 18, color: 'black'},
    headerStyle: {height: 49},
  },
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({
  })),
//   onTransitionStart: (() => {
//     console.log('页面跳转动画开始')
//   }),
//   onTransitionEnd: (() => {
//     console.log('页面跳转动画结束')
//   }),
}

const Stack = StackNavigator(RouteConfigs, StackNavigatorConfig)

export {Stack}