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
export default class CommonMyCell extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOn :false
        }  
    }
  static defaultProps = {
    leftIconName:'',
    leftTile:'',
    rightIconName:'',
    rightTile:'',
  };
  render() {
    return (
		<TouchableOpacity 
				activeOpacity={0.5}
        onPress={()=>{
        }}
    >
        <View style={styles.container}>
						{/* 左边 */}
            <View style={styles.leftViewStyle}>
                <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle}/>
                <Text style={styles.leftTitleStyle}>{this.props.leftTile}</Text>
            </View>
						{/* 右边 */}
            <View style={styles.rightViewStyle}>
                {this.renderRightView()}
            </View>
        </View>
    </TouchableOpacity>
    );
  }
  renderRightView() {
		return (
				<View style={{flexDirection:'row',alignItems:'center'}}>
						{this.rightContent()}
						<Image source={{uri:'icon_cell_rightArrow'}}  style={styles.rightMore}/>
				</View>
		) 
	}
	rightContent() {
		if(this.props.rightIconName.length == 0){
			return(
				<Text style={{ color:'gray'}}>{this.props.rightTile}</Text>
			)
		}else {
			return(
				<Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}}/>
			)
		}
		
	}
}

const styles = StyleSheet.create({
  container: {
		flexDirection:'row',
		justifyContent:'space-between',
		backgroundColor: 'white',
		alignItems:'center',
		paddingLeft:10,
		paddingRight:10,
		height:40,
		backgroundColor:'white',
		borderBottomColor:'#dddddd',
		borderBottomWidth:0.5,
	},
	leftViewStyle:{
		flexDirection:'row',
		alignItems:'center',
	},
  leftImgStyle:{
    width:30,
		height:30,
		borderRadius:15,
		marginRight:5,
  },
  leftTitleStyle:{
		fontSize:16,
  },
  rightImgStyle:{

  },
  rightTitleStyle:{

  },
  rightMore: {
			width:8,
			height:13,
			marginLeft:5,
	},
});

