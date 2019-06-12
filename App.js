/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,ListItem,Alert} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


// importing screens
import { MainScreen } from './App/Screens/MainScreen';
import { LoginScreen } from './App/Screens/LoginScreen';
import { ResetPasswordScreen } from './App/Screens/ResetPasswordScreen';
import { OrderDetailsScreen } from './App/Screens/OrderDetailsScreen';
import { ProfileScreen } from './App/Screens/ProfileScreen';
import { AccountDetailScreen } from './App/Screens/AccountDetailScreen';
import { OrderScreen } from './App/Screens/OrderScreen';
import { EarningsScreen } from './App/Screens/EarningsScreen';
import styles from './App/Screens/style';

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
import AsyncStorage from '@react-native-community/async-storage';


global.userData = {};
global.currentLat = false;
global.currentLng = false;
global.isUserLoggedIn = false;

const MainNavigator = createStackNavigator({
	Main: {
		screen: EarningsScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	Earning: {
		screen: EarningsScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	CreateAccount: {
		screen: MainScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: LoginScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	ForgetPassword: {
		screen: ResetPasswordScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	AccountDetailScreen: {
		screen: AccountDetailScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	OrderDetailsScreen: {
		screen: OrderDetailsScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	OrderScreen: {
		screen: OrderScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	ProfileScreen: {
		screen: ProfileScreen,
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
			isUserLoggedIn: false,
			hideNavigation : true,
		}
		global.drawerComponent = this;
	}
	
	__goAndReset(routeName, params = {}) {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: routeName, params })],
		  });
		this.props.navigation.dispatch(resetAction);
	}
    
    __logoutConfirm() {
        Alert.alert('Confirm', 'Are you sure you want to log out?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Logout', onPress: () => this.__logout() },
        ]);
    }
    
	__go(to, params = {}) {
		const pushAction = StackActions.push({
			routeName: to,
			params: params 
		  });
		  this.props.navigation.dispatch(pushAction);
	}
	
	__logout() {
		AsyncStorage.clear();
		global.isUserLoggedIn = false;
		global.userData = {};
		
		this.__goAndReset('Login');
	}

    render() {

		
        return (
			<View style={ { flex: 1, zIndex: 99, } }>
				<ScrollView style={{ flex : 1 }}>
					<View style={{ width: '100%', height: 100, paddingVertical : 5, paddingHorizontal : 10, backgroundColor: '#f9fbfa', alignItems: 'flex-start'}}>
						<View style={{ paddingTop : 30, flexDirection : 'row' , flex : 1 }}>
							<View style={{ flex : 0.9}}>
								<Text style={{ fontFamily: 'OpenSans-Bold', fontSize : 18, color : '#000' }}>{'Jamie Smith'}</Text>
								<Text style={{ fontFamily: 'OpenSans-Regular', fontSize : 15, color : '#cacccb' }}>{'Rider ID #12345'}</Text>
							</View>
							<View style={{ flex : 0.1 }}>
								<TouchableOpacity onPress={ () => this.props.navigation.closeDrawer() } >
									<Icon name={'chevron-right'} size={28} style={styles.defaultIconColor}></Icon>
								</TouchableOpacity>
							</View>
							
						</View>
					</View> 
					<View style={ styles.drawerItemsView }>
						<View style={ styles.drawerItemsView.items }>
							<View style={ styles.drawerItemsView.view }>
								<Icon name={'home'} size={25} style={styles.defaultIconColor}></Icon>
							</View>
							<TouchableOpacity onPress={ () => this.__go('Main') }>
								<Text style={ styles.drawerItemsView.items.text }>
									{'Home'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ styles.drawerItemsView.items }>
							<View style={ styles.drawerItemsView.view }>
								<Icon name={'shopping-bag'} size={25} style={styles.defaultIconColor}></Icon>
							</View>
							<TouchableOpacity onPress={ () => this.__go('OrderScreen') }>
								<Text style={ styles.drawerItemsView.items.text }>
									{'Orders'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ styles.drawerItemsView.items }>
							<View style={ styles.drawerItemsView.view }>
								<Icon name={'settings'} size={25} style={styles.defaultIconColor}></Icon>
							</View>
							<TouchableOpacity onPress={ () => this.__go('AccountDetailScreen') }>
								<Text style={ styles.drawerItemsView.items.text }>
									{'Settings'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ styles.drawerItemsView.items }>
							<View style={ styles.drawerItemsView.view }>
								<Icon name={'user'} size={25} style={styles.defaultIconColor}></Icon>
							</View>
							<TouchableOpacity onPress={ () => this.__go('ProfileScreen') }>
								<Text style={ styles.drawerItemsView.items.text }>
									{'Profile'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ styles.drawerItemsView.items }>
							<View style={ styles.drawerItemsView.view }>
								<Icon name={'log-out'} size={25} color={'red'}></Icon>
							</View>
							<TouchableOpacity onPress={ () => this.__logoutConfirm() }>
								<Text style={{ color : 'red', fontFamily : 'OpenSans-Bold', fontSize : 16 }}>
									{'Signout'}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={ { paddingLeft : 10 } }>
						<View style={ styles.drawerItemsView.otherMenus }>
							<TouchableOpacity>
								<Text style={ styles.drawerItemsView.items.text }>
									{'Help'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ styles.drawerItemsView.otherMenus }>
							<TouchableOpacity>
								<Text style={ styles.drawerItemsView.items.text }>
									{'FAQs'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={ styles.drawerItemsView.otherMenus }>
							<TouchableOpacity>
								<Text style={ styles.drawerItemsView.items.text }>
									{'Invite Friends'}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
				<View style={ { paddingHorizontal : 10, paddingVertical : 15 } }>
					<Text style={{ fontFamily: 'OpenSans-Regular', fontSize : 17, color : '#cccecd' }}>{'Version 1.0.0'}</Text>
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
