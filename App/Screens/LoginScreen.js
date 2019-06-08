import React from 'react';
import {View, Alert,Text, TouchableOpacity,TextInput} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import {BaseScreen} from '../Screens/BaseScreen';
import {Validator} from '../Utils/Validator';
import styles from './style';
import {_} from 'lodash';
import {Guest} from '../Models/Guest';
import {CTouchable,Header,Wrapper} from '../Components';
import AsyncStorage from '@react-native-community/async-storage';


export class LoginScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            loginValidated : false,
            usernameError: true,
            passwordError: true,
            isShowPassword : true,
            loaded : true
        }
    }

    __validateLogin() {
    	
    	let errorCount = 0;
    	let errors = {};

    	if(!Validator.isEmail(_.trim(this.state.email))) {
    		errorCount++;
            errors.usernameError = true;
            
    	} else {
            errors.usernameError = false;
            
    	}

    	if(Validator.isEmpty(this.state.password)) {
    		errorCount++;
    		errors.passwordError = true;
    	} else {
    		errors.passwordError = false;
    	}

    	errors.loginValidated = true;

    	this.setState(errors);

    	return errorCount == 0 ? true : false; 

    }

    __login(){
        let that = this;
        if(this.__validateLogin()){
            that.__activeLoader();
            Guest.login(this.state.email,this.state.password).then(response => {
                console.log(response);
                that.__deactiveLoader();
                if(response.success){
                    Alert.alert('Success', response.success[0]);
                   
                    global.userData = response.rider_data;
                    global.isUserLoggedIn = true;

                    AsyncStorage.setItem('user', JSON.stringify(global.userData));
                    AsyncStorage.setItem('isUserLoggedIn', '1');
                    AsyncStorage.setItem('token',  global.userData.token);

                    console.log(global.userData);

                    that.__goAndReset('Main');

                } else{
                    Alert.alert('Error', 'Email or password is invalid!'); 
                }
               
            }).catch(error => {
                console.log(error);
                that.__deactiveLoader();
                Alert.alert('Error', 'Please Try Again!');
            })
        }
    }



    render() {
        const PageLoader = (props) => this.__loader();
		return (
           <View style={ { flex: 1, zIndex: 99, backgroundColor : '#fff' } }>
               <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                    <View style={ { flex : 0.5, justifyContent : 'space-between' } }>
                        <View style={ { marginTop : 40, paddingHorizontal : 40, } }>
                            <Text style={ { color : '#191919', fontSize : 30, fontFamily: 'OpenSans-Bold',  } }>Sign In</Text>
                        </View>
                        <View style={ styles.loginFormView }>
                            <View>
                                <View style={ [ styles.loginFormView.textField, { flexDirection : 'row' }] }>
                                    <TextInput value={this.state.email} ref={ input => { this.inputs['email'] = input; }} returnKeyType={"next"} onChangeText={ (text) => this.setState({ email : text }) } underlineColorAndroid={ 'transparent' } style={ [ styles.defaultBoldText,{ fontSize : 20,width : '90%' } ] } placeholder={ 'Email Address' }></TextInput>
                                    {this.__showValidationIcon(this.state.usernameError, this.state.loginValidated)}
                                </View>
                            </View>
                            <View style={ { paddingTop : 25 } }>
                                <View style={ [ styles.loginFormView.textField, {flexDirection : 'row'} ] }>
                                    <View style={ { flex : 8, flexDirection : 'row' } }>
                                        <TextInput ref={ input => { this.inputs['password'] = input; }} onChangeText={ (text) => this.setState({ password : text }) } underlineColorAndroid={ 'transparent' } style={ [ styles.defaultBoldText,{ fontSize : 20, width : '100%' } ] } secureTextEntry={this.state.isShowPassword} placeholder={ 'Password' }></TextInput>
                                        
                                    </View>
                                    <TouchableOpacity onPress={ () => this.setState( { isShowPassword : !this.state.isShowPassword } ) } style={ {flex:2, marginTop : 10} }>
                                        <Icon name="eye" color={'#9b9b9b'} size={25}></Icon>
                                    </TouchableOpacity>
                                    {this.__showValidationIcon(this.state.passwordError, this.state.loginValidated)}
                                </View>
                            </View>
                            <View style={ { paddingVertical : 20 } }>
                                <TouchableOpacity onPress={ () => this.__login() } style={ { backgroundColor : '#23BC7D', justifyContent : 'center', alignItems : 'center', height : 60, borderRadius : 50 } }>
                                    <Text style={ { color : '#fff', fontSize : 20, fontWeight : 'bold' } }>{'Sign In'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
				</View>
                <View style={ {  paddingHorizontal : 40, paddingBottom : 30, flexDirection : 'row' } }>
                    <TouchableOpacity style={ { flex : 0.8, paddingTop : 10 } } onPress={ () => this.__go('ForgetPassword') }>
                        <Text style={ { color : '#b0b0b0', fontSize : 17, fontFamily: 'OpenSans-Bold', } }>Forget Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ {  flex : 0.2, backgroundColor : '#23BC7D',justifyContent : 'center', alignItems : 'center', height : 50, borderRadius : 50, } } onPress={ () => this.__back() }>
                        <Icon name="arrow-right" color={ '#fff' } size={ 30 } ></Icon>
                    </TouchableOpacity>
                </View>
                {
                    this.state.loaded == false ? <PageLoader /> : null
                }
           </View>
        );
    }
}
