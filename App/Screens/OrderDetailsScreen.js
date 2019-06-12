import React from 'react';
import { View, Alert, AsyncStorage, Text, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';



export class OrderDetailsScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            orders : this.props.navigation.state.params.data
        }
    }

    render() {
        
        return (
            <ScrollView style={{ backgroundColor: '#FBF9FC', flex: 1 }}>
                <View style={{ backgroundColor: '#23BC7D', justifyContent: 'center', alignItems: 'flex-start', }}>
                    <View style={{ paddingLeft: 15, paddingVertical: 8 }}>
                        <View>
                            <TouchableOpacity onPress={() => this.__back()}>
                                <Icon name="x" color={'#fff'} size={20}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: 30, paddingBottom: 10 }}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 15 }}>{this.state.orders.created_at + '  #' + this.state.orders.id}</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'Bold' }}>{this.state.orders.cust_fname}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, paddingVertical: 18 }}>
                    <View style={{ backgroundColor: '#FFFFFF', }}>
                        <View >
                            <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'Walt Time'}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'5.68 min'}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'Distance Time'}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'5.68 min'}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'Deliveries'}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                    <Text style={{ color: '#000', fontSize: 15 }} >
                                        {'2 of 2'}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20, borderBottomColor: 'grey', borderBottomWidth: 0.3, }}>
                                <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                    <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                        <Text style={{ color: '#000', fontSize: 18 }} >
                                            {'Base'}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                        <Text style={{ color: '#000', fontSize: 18 }} >
                                            {'$15.00'}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ paddingVertical: 20, borderBottomColor: 'grey', borderBottomWidth: 0.3, }}>
                                <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                    <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                        <Text style={{ color: '#000', fontSize: 18 }} >
                                            {'Base'}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                        <Text style={{ color: '#000', fontSize: 18 }} >
                                            {'$15.00'}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15 }}>
                                        <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'1 pickup x $1.55'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 0.5, }}>
                                            <Text style={{ color: 'grey', fontSize: 13 }} >
                                                {'$15.00'}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
