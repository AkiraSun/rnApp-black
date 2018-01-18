import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
export default class MiddleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderTopView()}
      </View>
    );
  }
  renderTopView(){
      return(
          <View style={styles.topView}>
            <Image source={{uri:'see'}} style={styles.leftIcon}/>
            <View style={styles.centerView}>
                <Text style={{ fontSize:18,color:'white',fontWeight:'bold' }}>akiraSun</Text>
                <Image source={{uri:'avatar_vip'}} style={{width:17,height:17}}/>
            </View>
            <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13}}/>
          </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#fd4b1f',
    height:110,
    alignItems:'center',
  },
  topView:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10,
  },
  centerView:{
    marginLeft:10,
    flexDirection:'row',
    alignItems:'center',
  },
  leftIcon: {
      width:50,
      height:50,
      borderRadius:25,
  }
});

