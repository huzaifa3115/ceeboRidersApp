import React from 'react';
import {View, Alert, AsyncStorage,Text, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/FontAwesome";
import {BaseScreen} from '../Screens/BaseScreen';
import styles from './style';
import {_} from 'lodash';


export class MainScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }


    render() {
		return (
           <View style={ { flex: 1, zIndex: 99 } }>
               <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                    <View style={ { flex : 0.7, justifyContent : 'space-between' } }>
                        <View style={ { marginTop : 40, paddingHorizontal : 40, } }>
                            <Text style={ { color : '#191919', fontSize : 30, fontFamily: 'OpenSans-Bold',  } }>Ceebo Riders</Text>
                        </View>
                        <View style={ { justifyContent : 'center', paddingHorizontal : 40, } }>
                            <View>
                                <Text style={ { color : '#191919', fontSize : 25, fontWeight : 'bold', fontFamily: 'OpenSans-Regular',  } }>Deliver with Ceebo and earn what u want and when u want.</Text>
                            </View>
                            
                            <View style={ { paddingVertical : 20 } }>
                                <TouchableOpacity style={ { backgroundColor : '#00ccbb', justifyContent : 'center', alignItems : 'center', height : 60, borderRadius : 50 } }>
                                    <Text style={ { color : '#fff', fontSize : 20, fontWeight : 'bold' } }>{'Create Account'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
				</View>
                <View style={ { justifyContent : 'center', paddingHorizontal : 40,paddingBottom : 30 } }>
                    <TouchableOpacity onPress={() => this.navigation.navigate('DrawerOpen')}>
                        <Text style={ { color : '#b0b0b0', fontSize : 17, fontFamily: 'OpenSans-Bold', } }>Already have Ceebo account?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ { flexDirection : 'row', paddingTop : 5 } } onPress={ () => this.__go('Login') }>
                        <View>
                            <Icon name="user-circle" color={ '#00ccbb' } size={ 20 } style={ { marginTop : 3 } } ></Icon>
                        </View>
                        <View style={ { paddingHorizontal : 8 } }>
                            <Text style={ { fontFamily: 'OpenSans-Bold', color : '#00ccbb',fontSize : 17 } }>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
           </View>
        );
    }
}
