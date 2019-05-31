import React from 'react';
import { View, Alert, AsyncStorage, Text, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper } from '../Components';



export class ProfileScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <View style={{ backgroundColor: '#FBF9FC', flex: 1 }}>
                <View style={{ backgroundColor: '#00cc99', height: 150, justifyContent: 'center', alignItems: 'flex-start', }}>
                    <View style={{ paddingLeft: 15 }}>
                        <View>
                            <TouchableOpacity>
                                <Icon name="x" color={'#fff'} size={25}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'Bold' }}>{'Profile'}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 15 }}>{'Rider Since 2017'}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', }}>
                    <View style={{ paddingTop: 20, paddingHorizontal: 15 }}>
                        <View style={{ alignItems: 'flex-start', borderBottomColor: 'grey', borderBottomWidth: 0.3, paddingVertical: 10 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 18 }} >{'Jamie Smith'}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: '#000', fontSize: 11 }} >{'jamiesmith@hotmail.co.uk'}</Text>
                                <Text style={{ color: '#000', fontSize: 11 }} >{'000 000 000 000'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 15, }}>
                        <Text style={{ color: '#00cc99', fontSize: 13 }} >{'Edit details'}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', marginTop: 20 }}>
                    <View style={{ paddingTop: 20, paddingHorizontal: 15 }}>
                        <View style={{ alignItems: 'flex-start', borderBottomColor: 'grey', borderBottomWidth: 0.3, paddingVertical: 10 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 18 }} >{'Scooter'}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: '#000', fontSize: 11 }} >{'RE12 3AA'}</Text>
                                <Text style={{ color: '#000', fontSize: 11 }} >{'Zego #1234567'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 15, }}>
                        <Text style={{ color: '#00cc99', fontSize: 13 }} >{'View vehicle details'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
