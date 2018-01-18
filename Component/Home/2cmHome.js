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
  ScrollView,
} from 'react-native';
import TopFlatList from './2cmTopFlatList'
import TopMenu from '../../LocalData/TopMenu.json'
var {width,height} = Dimensions.get('window')
export default class Home extends Component {
  // static navigationOptions = {
  //   headerRight: <Button title="Info" />,
  //   headerLeft: <Button title="Info" />,
  //   title: "<Text>123<Text/>",
  //   headerTitleStyle: {fontSize: 18,height:20,width:20, color: 'black'},
    
  // };
  constructor(props){
      super(props)
      this.state = {
          activePage :0
      }  
      this.onScrollAnimationEnd = this.onScrollAnimationEnd.bind(this);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.renderNavbar()}
        {/* 内容部分 */}
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={ this.onScrollAnimationEnd}
        >
          {this.renderScrollItem()}
        </ScrollView>
        {/* 页码部分 */}
        <View  style={styles.indicatorView}> 
          {this.renderIndicator()}
        </View>  
        {/* 内容部分 */}
        <Text style={styles.welcome}>
            Home
        </Text>
        
        <Button
          onPress={() => navigate('HomeDetails',{ user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    )
  }
  renderScrollItem() {
    var itemArr = []
    var colorArr = ['red','green']
    for(var i=0;i<colorArr.length;i++){
      itemArr.push(
        <TopFlatList 
        key={i}
        dataSource={TopMenu.data[i]}/>
        // <View key={i}  style={{backgroundColor:colorArr[i],width:width,height:120}}>
        //   <Text>{i}</Text>
        // </View>
      )
    }
    return itemArr
  }
  //指示器
  renderIndicator() {
    var indicatorArr = [],style;
    for(var i=0;i<2;i++){
      style = (i === this.state.activePage)?{color:'orange'}:{color:'gray'}
      indicatorArr.push(
          <Text key={i} style={[{ fontSize:25},style]}>&bull;</Text>
      )
    }
    return indicatorArr
  }
  onScrollAnimationEnd(e) {
    var currentPage = Math.floor(e.nativeEvent.contentOffset.x/width)
    this.setState({activePage: currentPage,})
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
             <Text style={styles.navText}>广州</Text>
          </TouchableOpacity>
          {/* 中间 */}
          <TextInput 
          placeholder="输入商家、品类、商圈"
          style={styles.search}
          />
          {/* 右边 */}
          <View style={styles.navRight}>
            <TouchableOpacity
              onPress={()=>{
                alert(123)
              }}
            >
              <Image style={styles.navImg} source={{uri:'icon_homepage_message'}}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                alert(123)
              }}
            >
             <Image style={styles.navImg} source={{uri:'icon_homepage_scan'}}/>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  navText: {
    color:'white'
  },
  indicatorView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  navBar: {
    height:Platform.OS == 'ios'?64:44,
    backgroundColor: '#FC6120',
    flexDirection:'row',
    alignItems:'center',
    paddingTop:Platform.OS == 'ios'?20:0,
    justifyContent:'space-around',
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

