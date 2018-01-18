/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
var {width,height} = Dimensions.get('window')
export default class TopFlatList extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            dataSource :this.props.dataSource
        }  
    }
    static defaultProps = {
      dataSource:[],
    };
  render() {
    console.log('this.state.dataSource',this.state.dataSource)
    return (
      <FlatList 
        data={this.state.dataSource}
        renderItem = {this.renderItem}
        style={styles.flatView}
        horizontal={true}
      />
        
      
    );
  }
  renderItem(itemData) {
    const {item,index} = itemData
    return (
      <View key={index} style={styles.itemView}>
        <Image source={{uri:item.image}} style={{width:52,height:52}}/>
        <Text>{item.title}</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  flatView: {
    flexDirection:'row',
    width:width,
    height:200,
  },
  itemView: {
    width:width/6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

