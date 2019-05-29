import React from 'react';
import {
	View,
	AsyncStorage,
	Image,
	Text,
	Dimensions,
	Alert
} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { StackActions, NavigationActions } from 'react-navigation';


export class BaseScreen extends React.Component {

	constructor(props) {
		super(props);
		this.inputs = {};
		this.state = {}
    }
    
    __back() {
		this.props.navigation.goBack();
	}

	__go(to, params = {}) {
		const pushAction = StackActions.push({
			routeName: to,
			params: params 
		  });
		  this.props.navigation.dispatch(pushAction);
    }
    
    focusNextField(key) {
		this.inputs[key].focus();
	}

	
}