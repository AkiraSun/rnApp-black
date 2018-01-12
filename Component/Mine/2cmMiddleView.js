import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import MiddleDtata from './MiddleDtata.json'
export default class MiddleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderAllItem()}
      </View>
    );
  }
  renderAllItem(){
      var itemArr = []
      for(var i=0;i<MiddleDtata.length;i++){
          var data = MiddleDtata[i]
          itemArr.push(
              <InnerView
                key={i}
                iconName={data.iconName}
                title={data.title}
              />
          )
      }
      return itemArr
  }
}

class InnerView extends Component {
    static defaultProps = {
        iconName:'',
        title:'',
    };
    render() {
      return (
        <View style={styles.container}>
          <Image source={{uri:this.props.iconName}}  style={{width:30,height:20}}/>
          <Text>{this.props.title}</Text>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  welcome: {
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

