import React from 'react';
import { StyleSheet, Text, View, Animated,FlatList} from 'react-native';
import SwitchNavigator from './src/Navigator.js'
import Header from './src/Header/Header.js';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class Clock extends React.Component{
  render(){
    return(
      <View>
        <Text>{this.props.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date : new Date(),
      movies : '',
    }
  }
  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1000)

    this.getMoviesFromApi();
  }
  tick(){
    this.setState({
      date : new Date()
    })
  }



  async getMoviesFromApi() {
    try {
      let response = await fetch(
        'https://facebook.github.io/react-native/movies.json'
      );
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({movies : responseJson.movies})
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  render() {
  //   return (
  //    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //      <Header />
  //      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
  //        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
  //      </FadeInView>
  //       <Text>{this.state.date.toLocaleTimeString()}</Text>
  //       <FlatList
  //         data={this.state.movies}
  //         renderItem={({item}) => {
  //           console.log(item);
  //           <Text>{item.title}</Text>
  //         }}
  //       />
  //    </View>
  //  )
    return <SwitchNavigator/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
