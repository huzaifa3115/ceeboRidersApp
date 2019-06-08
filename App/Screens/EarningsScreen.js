import React from 'react';
import { View, Alert, Text, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper } from '../Components';
import AsyncStorage from '@react-native-community/async-storage';



export class EarningsScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            isloading: false
        }
        this.__checkAuth();
    }

    __checkAuth() {
        AsyncStorage.getItem('user').then(response => {

            try {
                let responseJson = JSON.parse(response);
                if (responseJson) {
                    if (responseJson.id !== undefined && responseJson.id !== 0) {
                        global.userData = responseJson;
                        this.setState({ isloading: true });
                        global.isUserLoggedIn = true;
                    }
                } else {
                    this.setState({ isloading: true });
                    this.__goAndReset('Login');
                }
            } catch (e) {
            }

        });
    }



    render() {
        if (this.state.isloading) {
            return (
                <View style={{ backgroundColor: '#FBF9FC', flex: 1 }}>
                    <View style={{ backgroundColor: '#23BC7D', height: 150, justifyContent: 'center', alignItems: 'flex-start', }}>
                        <View style={{ paddingLeft: 15 }}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 30, fontFamily: 'OpenSans-Bold' }}>{'Earnings'}</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 15 }}>{'13 Jan 2019'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', top: 120, width: '100%', paddingHorizontal: 15 }}>
                        <View style={{ backgroundColor: '#fff', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 15 }}>
                                <View style={{ paddingHorizontal: 10, flex: 0.5, paddingVertical: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View>
                                            <Text style={{ color: '#23BC7D', fontWeight: 'Bold', position: 'absolute', right: 30, top: 0, fontSize: 15 }}>{'$'}</Text>
                                            <Text style={{ color: '#23BC7D', fontSize: 40, fontWeight: 'Bold' }}>{'0'}</Text>
                                            <Text style={{ color: '#23BC7D', fontWeight: 'Bold', position: 'absolute', left: 30, top: 0, fontSize: 15 }}>{'00'}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: '#23BC7D', fontSize: 15, fontWeight: 'Bold' }}>{'Total Earnings'}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: 10, flex: 0.5, paddingVertical: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View>
                                            <Text style={{ color: '#23BC7D', fontSize: 40, fontWeight: 'Bold' }}>{'0'}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: '#23BC7D', fontSize: 15, fontWeight: 'Bold' }}>{'Orders'}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ top: 130, }}>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 20, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ alignItems: 'flex-start', flex: 0.8 }}>
                                    <Text style={{ fontFamily: 'OpenSans-Bold', color: '#000', fontSize: 18 }} >
                                        {'Statements'}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.2, }}>
                                    <Text style={{ fontFamily: 'OpenSans-Bold', color: '#23BC7D', fontSize: 14 }} >{'More Info'}                                                          </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#FFFFFF', }}>
                            <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                <View style={{ alignItems: 'flex-start', flex: 0.8 }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'Invoice History'}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.2, }}>
                                    <Icon name="chevron-right" color={'#23BC7D'} size={20}></Icon>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 20, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ alignItems: 'flex-start', flex: 0.8 }}>
                                    <Text style={{ fontFamily: 'OpenSans-Bold', color: '#000', fontSize: 18 }} >
                                        {'Activity'}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.2, }}>
                                    <Text style={{ fontFamily: 'OpenSans-Bold', color: '#23BC7D', fontSize: 14 }} >{'More Info'}                                                          </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#FFFFFF', }}>
                            <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                <View style={{ alignItems: 'flex-start', flex: 0.8 }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'All Activity'}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.2, }}>
                                    <Icon name="chevron-right" color={'#23BC7D'} size={20}></Icon>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        
        return <View/>
    }
}
