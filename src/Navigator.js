
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import HomeScreen from './Home/HomeScreen';
import OtherScreen from './Other/OtherScreen';
import SignInScreen from './SignIn/SignInScreen';
import styles from './Style.js';

const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = StackNavigator({ SignIn: SignInScreen });

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
