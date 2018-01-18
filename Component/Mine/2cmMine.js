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
  Button,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import CommonMyCell from './2cmCommonMyCell'
import HeaderView from './2cmHeaderView'
import MiddleView from './2cmMiddleView'
var {width,height} = Dimensions.get('window')
export default class Mine extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.renderNavbar()}
        <HeaderView/>
        <ScrollView
          style={styles.scrollViewStyle}
        >
           <View style={{ marginTop:20}}>
            <CommonMyCell 
              leftIconName="collect"
              leftTile="我的订单"
              rightTile="查看全部订单"
            />
            <MiddleView/>
          </View>
          <View style={{ marginTop:20}}>
            <CommonMyCell 
              leftIconName="draft"
              leftTile="钱包"
              rightTile="账户：100元"
            />
             <CommonMyCell 
              leftIconName="like"
              leftTile="抵用券"
              rightTile="10张"
            />
          </View>
          <View style={{ marginTop:20}}>
            <CommonMyCell 
              leftIconName="draft"
              leftTile="积分商场"
            />
          </View>
          <View style={{ marginTop:20}}>
            <CommonMyCell 
              leftIconName="new_friend"
              leftTile="今日推荐"
              rightIconName="me_new"
            />
          </View>
          <View style={{ marginTop:20}}>
            <CommonMyCell 
              leftIconName="pay"
              leftTile="我要合作"
            />
          </View>
          <View style={{ marginTop:20}}>
          </View>
        </ScrollView>
      </View>
    );
  }
  renderNavbar() {
    return (
      <View style={styles.navBar}>
          {/* 左边 */}
          <TouchableOpacity
            onPress={()=>{
              alert(123)
            }}
          >
          </TouchableOpacity>
          {/* 中间 */}
          <Text style={styles.navText}>
            更多
          </Text>
          {/* 右边 */}
          <View style={styles.navRight}>
            <TouchableOpacity
              onPress={()=>{
                alert(123)
              }}
            >
              <Image style={styles.navImg} source={{uri:'icon_mine_setting'}}/>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewStyle:{
    backgroundColor: '#e8e8e8',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navText: {
    color:'white',
    fontSize:18,
    fontWeight:'900',
  },
  navBar: {
    height:Platform.OS == 'ios'?64:44,
    backgroundColor: '#FC6120',
    flexDirection:'row',
    alignItems:'center',
    paddingTop:Platform.OS == 'ios'?20:0,
    justifyContent:'center',
  },
  search: {
    width:width*0.7,
    height:30,
    lineHeight:30,
    backgroundColor: 'white',
    marginTop:Platform.OS == 'ios'?8:0,
    borderRadius:15,
    paddingLeft:10,
    padding:0,
  },
  navRight: {
    flexDirection:'row',
    height:40,
    alignItems:'center',
    position:'absolute',
    right:10,
    bottom:5,
  },
  navImg: {
    width:Platform.OS == 'ios'?28:24,
    height:Platform.OS == 'ios'?28:24,
   
  },
  welcome: {
    backgroundColor: '#FC6120',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

