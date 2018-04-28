import React from 'react';
import { StyleSheet, Text, View, Animated,} from 'react-native';
import Block from './component/Block.js';

export default class Header extends React.Component{
  render(){
    return(
      <View>
        <Block placeholder="Home" background="lightblue"/>
      </View>
    );
  }
}
