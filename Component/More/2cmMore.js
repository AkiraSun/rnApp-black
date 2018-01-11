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
import CommonCell from './2cmCommonCell'
var {width,height} = Dimensions.get('window')
export default class More extends Component {
  // static navigationOptions = {
  //   headerRight: <Button title="Info" />,
  //   headerLeft: <Button title="Info" />,
  //   title: "<Text>123<Text/>",
  //   headerTitleStyle: {fontSize: 18,height:20,width:20, color: 'black'},
    
  // };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.renderNavbar()}
        <ScrollView>
          <View style={{ marginTop:20}}>
             <CommonCell title="扫一扫"/>
          </View>
          <View style={{ marginTop:20}}>
             <CommonCell title="省流量模式" isSwich={true}/>
             <CommonCell title="消息提醒"/>
             <CommonCell title="邀请好友"/>
             <CommonCell title="清空缓存" rightTile="199M"/>
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

