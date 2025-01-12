import React from 'react';
import {
	View,
	ScrollView,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	Image,
	Modal,
	Switch,
	Picker
} from 'react-native';
import { _ } from 'lodash';
import Icon from "react-native-vector-icons/Feather";

import styles from '../Screens/style';

export class Header extends React.Component {
	render() {
		let style = this.props.style;
		return (
			<View style={[inlineStyles.header, style ? style : { backgroundColor: '#f5f5f7' }]}>
				{this.props.children}
			</View>
		);
	}
}

export class Loader extends React.Component {
	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}
}
export class MenuIcon extends React.Component {
	render() {
		let props = this.props.props;
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.openDrawer()}  >
				<Icon color={this.props.color ? 'grey' : '#fff'} name="menu" size={25} />
			</TouchableOpacity>
		);
	}
}

export class Wrapper extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, zIndex: 99, }}>
				<ScrollView style={{ backgroundColor: '#f5f5f7', flex: 1 }} refreshControl={this.props.refreshControl}>
					{this.props.children}
				</ScrollView>
				{this.props.footer}
			</View>
		);
	}
}

export class CTouchable extends React.Component {

	get iosTouchable() {
		return (
			<TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
				{this.props.children}
			</TouchableOpacity>
		);
	}

	get androidTouchable() {
		return (
			<TouchableNativeFeedback onPress={this.props.onPress}>
				<View style={this.props.style}>{this.props.children}</View>
			</TouchableNativeFeedback>
		);
	}

	render() {
		return (
			<View>
				{Platform.OS === 'ios' || Platform.Version <= 21 ? this.iosTouchable : this.androidTouchable}
			</View>
		);
	}

}

let inlineStyles = {
	header: {
		backgroundColor: '#ffffff',
		height: 50,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		// shadowOpacity: 0.18,
		// shadowRadius: 1.00,
		// elevation: 1,
		flexDirection: 'row',
		flex: 1,
		paddingLeft: 5,
		paddingRight: 5,
		borderBottomWidth: 0,
		borderBottomColor: '#d9d9d9'
	},
	FloatingButtonStyle: {
		backgroundColor: '#23BC7D',
		padding: 10,
		borderRadius: 50,
		color: '#fff'
	},
	TouchableOpacityStyle: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		right: 10,
		bottom: 30,
	},
};