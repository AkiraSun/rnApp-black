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
  Switch
} from 'react-native';
var {width,height} = Dimensions.get('window')
export default class CommonCell extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOn :false
        }  
    }
  static defaultProps = {
    title:'',
    isSwich: false,
    rightTile:'',
  };
  render() {
    return (
    <TouchableOpacity 
        onPress={()=>{
        }}
    >
        <View style={styles.container}>
            <Text style={styles.cellText}>{this.props.title}</Text>
            {this.renderRightView()}
        </View>
    </TouchableOpacity>
    );
  }
  renderRightView() {
      if(this.props.isSwich){
        return (
            <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} />
        ) 
      }else{
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
               {this.rightTile()}
                <Image source={{uri:'icon_cell_rightArrow'}}  style={styles.rightMore}/>
            </View>
        ) 
      }
    
  }
  rightTile() {
      if(this.props.rightTile.length>0){
        return(
            <Text style={{color:'gray',marginRight:4}}>{this.props.rightTile}</Text>
        )
      }
  }
}

const styles = StyleSheet.create({
  container: {
   height:44,
   backgroundColor:'white',
   borderBottomColor:'#dddddd',
   borderBottomWidth:0.5,
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   paddingLeft:10,
   paddingRight:10,
  },
  rightMore: {
      width:8,
      height:13,
  },
  cellText: {
    fontSize:16,
  },
});

