// In App.js in a new project

import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import DashbaordScreen from './DashbaordScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as images from '../assets/images';
import CommonCss from '../component/CommonCss';
const TabNavigator = createBottomTabNavigator({
  LoginScreen: LoginScreen,
  SignupScreen: SignupScreen
});

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerLeft: (
          <Icon.Button
            name='bars'
            backgroundColor='rgba(52, 52, 52, 0)'
            color='#000'
            onPress={() => alert('This is a hamburger!')}
          />
        ),
        headerLeftContainerStyle: {
          opacity: 0.5,
          marginLeft: 10
        },
        headerTitle: (
          <Image source={images.img.NetFlixLogo} style={CommonCss.logo} />
        ),
        headerRight: (
          <Icon.Button
            name='search'
            backgroundColor='rgba(52, 52, 52, 0)'
            color='#000'
            onPress={() => alert('This is search!')}
          />
        ),
        headerRightContainerStyle: {
          opacity: 0.5,
          marginRight: 10
        },
        headerBackTitle: null
      })
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: () => ({
        title: `Signup`,
        headerBackTitle: null
      })
    },
    Dashboard: {
      screen: DashbaordScreen,
      navigationOptions: () => ({
        title: `Dashboard`,
        headerBackTitle: null
      })
    }
  },
  {
    navigationOptions: {
      header: {
        style: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0 // remove shadow on iOS
        }
      }
    }
  }
);

export default createAppContainer(AppNavigator);
