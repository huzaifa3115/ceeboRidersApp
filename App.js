/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// importing screens
import { MainScreen } from './App/Screens/MainScreen';
import { LoginScreen } from './App/Screens/LoginScreen';
import { ResetPasswordScreen } from './App/Screens/ResetPasswordScreen';
// importing screens

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Main: { 
    screen : MainScreen,
    headerMode: 'float',
      navigationOptions: {
        header: null
    }
  },
  Login: { 
    screen : LoginScreen,
    headerMode: 'float',
      navigationOptions: {
        header: null
    }
  },
  ForgetPassword: { 
    screen : ResetPasswordScreen,
    headerMode: 'float',
      navigationOptions: {
        header: null
    }
  },
});

const App = createAppContainer(MainNavigator);

export default App;