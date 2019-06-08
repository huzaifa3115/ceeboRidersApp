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
                <View style={ [ styles.defaultBackgroundColor, { height: 150, justifyContent: 'center', alignItems: 'flex-start', }] }>
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
                    <View style={ styles.profileScreenInfoView }>
                        <View style={ styles.profileScreenInfoView.view }>
                            <View>
                                <Text style={  styles.profileScreenInfoView.view.heading } >{'Jamie Smith'}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={ styles.profileScreenInfoView.view.infoText } >{'jamiesmith@hotmail.co.uk'}</Text>
                                <Text style={ styles.profileScreenInfoView.view.infoText } >{'000 000 000 000'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 15, }}>
                        <Text style={  styles.profileScreenInfoView.view.btn } >{'Edit details'}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', marginTop: 20 }}>
                    <View style={ styles.profileScreenInfoView }>
                        <View style={ styles.profileScreenInfoView.view }>
                            <View>
                                <Text style={  styles.profileScreenInfoView.view.heading } >{'Scooter'}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={ styles.profileScreenInfoView.view.infoText } >{'RE12 3AA'}</Text>
                                <Text style={ styles.profileScreenInfoView.view.infoText } >{'Zego #1234567'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 15, }}>
                        <Text style={  styles.profileScreenInfoView.view.btn } >{'View vehicle details'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
