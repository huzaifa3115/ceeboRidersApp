import React from 'react';
import {View, Alert, AsyncStorage,Text, TouchableOpacity,TextInput} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import {BaseScreen} from '../Screens/BaseScreen';
import styles from './style';
import {_} from 'lodash';
import {CTouchable,Header,Wrapper} from '../Components';



export class LoginScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }


    render() {
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
                                    {/* {this.__showValidationIcon(this.state.usernameError, this.state.loginValidated)} */}
                                </View>
                            </View>
                            <View style={ { paddingTop : 25 } }>
                                <View style={ [ styles.loginFormView.textField, {flexDirection : 'row'} ] }>
                                    <View style={ { flex : 8, flexDirection : 'row' } }>
                                        <TextInput ref={ input => { this.inputs['password'] = input; }} onChangeText={ (text) => this.setState({ password : text }) } underlineColorAndroid={ 'transparent' } style={ [ styles.defaultBoldText,{ fontSize : 20, width : '100%' } ] } secureTextEntry={this.state.isShowPassword} placeholder={ 'Password' }></TextInput>
                                        {/* {this.__showValidationIcon(this.state.passwordError, this.state.loginValidated)} */}
                                    </View>
                                    <TouchableOpacity onPress={ () => this.setState( { isShowPassword : !this.state.isShowPassword } ) } style={ {flex:2, marginTop : 10} }>
                                        <Icon name="eye" color={'#9b9b9b'} size={25}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
				</View>
                <View style={ {  paddingHorizontal : 40, paddingBottom : 30, flexDirection : 'row' } }>
                    <TouchableOpacity style={ { flex : 0.8, paddingTop : 10 } } onPress={ () => this.__go('ForgetPassword') }>
                        <Text style={ { color : '#b0b0b0', fontSize : 17, fontFamily: 'OpenSans-Bold', } }>Forget Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ {  flex : 0.2, backgroundColor : '#00ccbb',justifyContent : 'center', alignItems : 'center', height : 50, borderRadius : 50, } } onPress={ () => this.__back() }>
                        <Icon name="arrow-right" color={ '#fff' } size={ 30 } ></Icon>
                    </TouchableOpacity>
                </View>
           </View>
        );
    }
}
