import React from 'react';
import { View, Alert, AsyncStorage, Text, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';



export class AccountDetailScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <Wrapper style={{ backgroundColor: '#f5f5f7' }}>
                {/* header */}
                <Header style={{ backgroundColor : '#23BC7D' }}>
                    <View style={ styles.header.left }>
                        <CTouchable onPress={() => this.__back()} style={ {  } }>
                            <Icon name={'arrow-left'} size={25} color={ '#fff' } />
                        </CTouchable>
                    </View>
                    <View style={ styles.header.center }>
                        <Text style={{ color : '#fff', fontSize : 18, fontFamily : 'OpenSans-Bold' }}>{'Account Details'}</Text>
                    </View>
                </Header>
                {/* header */}
                <View style={{ backgroundColor: '#fff', }}>
                    <View style={{ paddingTop: 20, paddingHorizontal: 15,paddingVertical: 15 }}>
                        <View style={{ alignItems: 'flex-start', borderBottomColor: 'grey', }}>
                            <View>
                                <Text style={ styles.profileScreenInfoView.view.infoText } >{'Phone Number'}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: '#000', fontSize: 15 }} >{'+0000 0000 0000'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff',marginTop: 15 }}>
                    <View style={{ paddingTop: 20, paddingHorizontal: 15, paddingVertical: 15 }}>
                        <View style={{ alignItems: 'flex-start', borderBottomColor: 'grey', }}>
                            <View>
                                <Text style={ styles.profileScreenInfoView.view.infoText } >{'Email'}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: '#000', fontSize: 15 }} >{'jamiesmith@hotmail.co.uk'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Wrapper>
        )
    }
}
