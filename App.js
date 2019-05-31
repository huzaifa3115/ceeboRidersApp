/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,ListItem,List} from 'react-native';

// importing screens
import { MainScreen } from './App/Screens/MainScreen';
import { LoginScreen } from './App/Screens/LoginScreen';
import { ResetPasswordScreen } from './App/Screens/ResetPasswordScreen';
import { OrderDetailsScreen } from './App/Screens/OrderDetailsScreen';
import { ProfileScreen } from './App/Screens/ProfileScreen';
import { AccountDetailScreen } from './App/Screens/AccountDetailScreen';
// importing screens

import Icon from "react-native-vector-icons/Feather";

import {  
	DrawerItems,
    StackNavigator,
    createDrawerNavigator,
    createStackNavigator,
	createAppContainer
} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainNavigator = createStackNavigator({
  Main: { 
    screen : AccountDetailScreen,
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
  AccountDetailScreen: { 
    screen : AccountDetailScreen,
    headerMode: 'float',
      navigationOptions: {
        header: null
    }
  },
});

class CustomDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false
        }
    }
    
    // reload() {
    //     var that = this;
    //     AsyncStorage.getItem('userdata', (err, result) => {
    //         if(result) {
    //             that.setState({
    //                 isUserLoggedIn: true
    //             })
    //         }
    //     });
    // }
    
    // logoutConfirm() {
    //     Alert.alert('Confirm', 'Are you sure you want to log out?', [
    //         {text: 'Cancel', style: 'cancel'},
    //         {text: 'Logout', onPress: () => this.logout() },
    //     ]);
    // }
    
    // logout() {
    //     AsyncStorage.setItem('userdata', "");
    //     AsyncStorage.setItem('cart', "");
    //     AsyncStorage.setItem('sessionId', "");
    //     this.setState({
    //         isUserLoggedIn: false 
    //     });
    //     try {
    //         LoginManager.logOut();
    //     } catch(e) {}
    // }

    render() {

		
        return (
			<View style={{flex: 1, zIndex: 99,}}>
				<ScrollView style={{ flex : 1 }}>
					<View style={{ width: '100%', height: 100, paddingVertical : 5, paddingHorizontal : 10, backgroundColor: '#f9fbfa', alignItems: 'flex-start'}}>
						<View style={{ paddingTop : 30, flexDirection : 'row' , flex : 1 }}>
							<View style={{ flex : 0.9}}>
								<Text style={{ fontFamily: 'OpenSans-Bold', fontSize : 18, color : '#000' }}>{'Jamie Smith'}</Text>
								<Text style={{ fontFamily: 'OpenSans-Regular', fontSize : 15, color : '#cacccb' }}>{'Rider ID #12345'}</Text>
							</View>
							<View style={{ flex : 0.1 }}>
								<Icon name={'chevron-right'} size={28} color={'#00ccbb'}></Icon>
							</View>
						</View>
					</View> 
					<View style={ { paddingHorizontal: 10 } }>
						<View style={ { flexDirection : 'row', paddingVertical : 15 } }>
							<View style={ { paddingHorizontal : 5 } }>
								<Icon name={'settings'} size={25} color={'#00ccbb'}></Icon>
							</View>
							<TouchableOpacity>
								<Text style={{ color : '#000', fontFamily : 'OpenSans-Regular', fontSize : 16 }}>
									{'Profile Screen'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ { flexDirection : 'row', paddingVertical : 15 } }>
							<View style={ { paddingHorizontal : 5 } }>
								<Icon name={'settings'} size={25} color={'#00ccbb'}></Icon>
							</View>
							<TouchableOpacity>
								<Text style={{ color : '#000', fontFamily : 'OpenSans-Regular', fontSize : 16 }}>
									{'Order Detail Screen'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ { flexDirection : 'row', paddingVertical : 15 } }>
							<View style={ { paddingHorizontal : 5 } }>
								<Icon name={'settings'} size={25} color={'#00ccbb'}></Icon>
							</View>
							<TouchableOpacity>
								<Text style={{ color : '#000', fontFamily : 'OpenSans-Regular', fontSize : 16 }}>
									{'Login Screen'}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
				<View style={ { paddingHorizontal : 10, paddingVertical : 15 } }>
					<Text style={{ fontFamily: 'OpenSans-Regular', fontSize : 14, color : '#cccecd' }}>{'Version 8.0'}</Text>
					<TouchableOpacity>
						<Text style={{ fontFamily: 'OpenSans-Regular', fontSize : 18, color : '#00ccbb' }}>{'Send Feedback'}</Text>
					</TouchableOpacity>
				</View>
			</View>
        );
    }
    
    
}

const App = createDrawerNavigator({
    Main: {
      screen: MainNavigator,
    },
    
  },{
    contentComponent: CustomDrawer ,
})


module.exports = {
    App: createAppContainer(App)
};
