import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class Block extends React.Component{
  render(){
    return(
      <View>
        <View style={[styles.block, styles.alice]}>
          <Text style={styles.text}>{this.props.placeholder}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lightblue : {
    backgroundColor : 'lightblue',
  },
  alice : {
    backgroundColor: 'aliceblue',
  },
  green : {
    backgroundColor: 'green',
  },
  block : {
    width : 100,
    height: 100,
    padding : 15,
    justifyContent:'center',
    alignItems : 'center',
    marginVertical : 10,
  },
  text : {
    color:'grey',
    fontSize:18,
  },
})
