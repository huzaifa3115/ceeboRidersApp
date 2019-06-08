import React from 'react';
import {View, Alert, AsyncStorage,Text,TextInput,TouchableOpacity} from 'react-native';
import {BaseScreen} from '../Screens/BaseScreen';
import styles from './style';
import {_} from 'lodash';
import Icon from 'react-native-vector-icons/Feather';
import {CTouchable,Header,Wrapper} from '../Components';
import {Guest} from '../Models/Guest';

export class ResetPasswordScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            loaded : true
        }
    }

    __resetPassword(){
        this.__activeLoader();
        Guest.forgetPassword(this.state.email).then( response => {
            this.__deactiveLoader();
            console.log(response);
            if(response.status){
                Alert.alert('Success', response.message);
                this.setState({ email : '' });
            } else{
                Alert.alert('Error', response.message);  
            }
        } ).catch( error => {
            this.__deactiveLoader();
        } )
    }


    __pageFooter(){
        return(
            <View style={ {  paddingHorizontal : 40, paddingBottom : 30, flexDirection : 'row' } }>
                <TouchableOpacity style={ { flex : 0.8, paddingTop : 10 } } onPress={ () => this.__go('ForgetPassword') }>
                    <Text style={ { color : '#b0b0b0', fontSize : 17, fontFamily: 'OpenSans-Bold', } }>Forget Password</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={ {  flex : 0.2, backgroundColor : '#23BC7D',justifyContent : 'center', alignItems : 'center', height : 50, borderRadius : 50, } } onPress={ () => this.__back() }>
                        <Icon name="arrow-right" color={ '#fff' } size={ 30 } ></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        const PageLoader = (props) => this.__loader();

		return (
            <Wrapper footer={this.state.loaded == false ? <PageLoader /> : null}>
                {/* header */}
                <Header>
                    <View style={ styles.header.left }>
                        <CTouchable onPress={() => this.__back()} style={ { paddingLeft: 15, paddingTop : 30 } }>
                            <Icon name={'arrow-left'} size={35} color={ '#000' } />
                        </CTouchable>
                    </View>
                </Header>
                {/* header */}
                <View style={ { flex : 0.5, justifyContent : 'space-between' } }>
                    <View style={ { marginTop : 40, paddingHorizontal : 40, } }>
                        <Text style={ { color : '#191919', fontSize : 30, fontFamily: 'OpenSans-Bold',  } }>{'Reset Password'}</Text>
                    </View>
                    <View style={ [ styles.loginFormView, { marginTop : 30 } ] }>
                        <View>
                            <View style={ [ styles.loginFormView.textField, { flexDirection : 'row' }] }>
                                <TextInput value={this.state.email} ref={ input => { this.inputs['email'] = input; }} returnKeyType={"next"} onSubmitEditing={ () => this.__resetPassword() } onChangeText={ (text) => this.setState({ email : text }) } underlineColorAndroid={ 'transparent' } style={ [ styles.defaultBoldText,{ fontSize : 20,width : '90%' } ] } placeholder={ 'Email Address' }></TextInput>
                            </View>
                            <Text style={ { fontFamily : 'OpenSans-Regular', marginTop : 10, color : '#000' } }>We'll send instruction to reset your password</Text>
                        </View>
                    </View>
                    <View style={ { marginTop : 30,paddingHorizontal : 40, } }>
                        <CTouchable style={ [ styles.button,styles.loginBtns.btn ] } onPress={ () => this.__resetPassword()}>
                            <Text style={ [ styles.defaultBoldText,styles.defaultTextColor, { fontSize : 18 } ] }> {'Reset'} </Text>
                        </CTouchable>
                    </View>
                </View>
            </Wrapper>
        );
    }
}
