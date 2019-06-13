import React from 'react';
import { View, Alert, Text, TouchableOpacity, TextInput, PermissionsAndroid, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper, MenuIcon } from '../Components';
import AsyncStorage from '@react-native-community/async-storage';



export class HomeScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            isloading: false
        }
        this.__checkAuth();
        requestLocationPermission();
        async function requestLocationPermission() {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // console.log('You can use the camera');
                } else {
                    //console.log('Camera permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
        }
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
                <Wrapper>
                    <View style={styles.homeCardContainer}>
                        {/* header */}
                        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                            <Header>
                                <View style={[{ flexDirection: 'row', flex: 0.5, alignItems: 'flex-start' }]}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/card-icon-image.jpg')}
                                            style={[styles.orderScreenCartView.img, { borderRadius: 0, marginTop: 5, width: 50 }]}
                                        />
                                    </View>
                                    <View style={{ paddingHorizontal: 7 }}>
                                        <Text style={[styles.defaultHeading, { fontSize: 15, color: '#000' }]}>{'Gold Change Card'}</Text>
                                        <Text style={[styles.defaultBoldText, { fontSize: 12 }]}>{'XX-1234'}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                    <MenuIcon props={this.props} color={'grey'} />
                                </View>
                            </Header>
                        </View>
                        {/* header */}
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={styles.homeCardContainer.card}>
                                <View style={styles.homeCardContainer.card.item}>
                                    <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                        <Text style={{ color: '#a1a1a1', fontSize: 12, fontFamily: 'OpenSans-Bold' }}>{'MINIMUM'}</Text>
                                        <Text style={{ color: '#89888b', fontSize: 15, fontFamily: 'OpenSans-Bold' }}>{'Dec 3rd, 2018'}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', flex: 0.5 }}>
                                        <Text style={{ color: '#a1a1a1', fontSize: 12, fontFamily: 'OpenSans-Bold' }}>{'Total Due'}</Text>
                                        <Text style={{ color: '#515757', fontSize: 20, fontFamily: 'OpenSans-Bold' }}>{'59,610'}</Text>
                                    </View>
                                </View>
                                <View style={[styles.homeCardContainer.card.item, { paddingTop: 10 }]}>
                                    <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                        <Text style={{ color: '#000', fontSize: 50, fontFamily: 'OpenSans-Bold' }}>{'7,1500'}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', flex: 0.5 }}>
                                        <Text style={{ color: '#a1a1a1', fontSize: 12, fontFamily: 'OpenSans-Bold' }}>{'Rewards'}</Text>
                                        <Text style={{ color: '#515757', fontSize: 20, fontFamily: 'OpenSans-Bold' }}>{'59,610'}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                            <TouchableOpacity style={[{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 5 }, styles.defaultBackgroundColor]}>
                                <View style={{ alignItems: 'flex-start', flex: 0.5 }}>
                                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#fff' }}>Pay Now</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 0.5 }}>
                                    <Icon name={'arrow-right'} color={"#fff"} size={20} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <View style={[styles.orderScreenCartView, { borderBottomColor: '#908f8d', borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                                    <View>
                                        <Text style={[styles.orderScreenCartView.view.heading, { fontSize: 18 }]}>{'Recent Transaction'}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.orderScreenCartView.view.heading}>{'Last Week'}</Text>
                                        <Icon name={'chevron-down'} color={"#000"} size={20} />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.orderScreenCartView, { borderBottomColor: '#908f8d', borderBottomWidth: 0.5 }]}>
                                <View style={styles.orderScreenCartView.view}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/card-icon-image.jpg')}
                                            style={[styles.orderScreenCartView.img, { borderRadius: 0, marginTop: 5, width: 50 }]}
                                        />
                                    </View>
                                    <View style={{ paddingHorizontal: 10 }}>
                                        <View>
                                            <Text style={[styles.orderScreenCartView.view.heading, styles.defaultHeading, { fontSize: 16 }]}>{'PROJECT.COM'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.orderScreenCartView.view.text, styles.defaultHeading, { fontSize: 15 }]} >{'Online'}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                    <View>
                                        <Text style={[styles.orderScreenCartView.view.heading, styles.defaultHeading, { fontSize: 16 }]}>{'$627'}</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.orderScreenCartView.view.text, styles.defaultHeading, { fontSize: 15 }]} >{'26 NOV'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.orderScreenCartView, { borderBottomColor: '#908f8d', borderBottomWidth: 0.5 }]}>
                                <View style={styles.orderScreenCartView.view}>
                                    <View>
                                        <Image
                                            source={require('./../../assets/img/card-icon-image.jpg')}
                                            style={[styles.orderScreenCartView.img, { borderRadius: 0, marginTop: 5, width: 50 }]}
                                        />
                                    </View>
                                    <View style={{ paddingHorizontal: 10 }}>
                                        <View>
                                            <Text style={[styles.orderScreenCartView.view.heading, styles.defaultHeading, { fontSize: 16 }]}>{'PROJECT.COM'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.orderScreenCartView.view.text, styles.defaultHeading, { fontSize: 15 }]} >{'Online'}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                    <View>
                                        <Text style={[styles.orderScreenCartView.view.heading, styles.defaultHeading, { fontSize: 16 }]}>{'$627'}</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.orderScreenCartView.view.text, styles.defaultHeading, { fontSize: 15 }]} >{'26 NOV'}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                </Wrapper>
            )
        }

        return <View />
    }
}
