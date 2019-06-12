import React from 'react';
import { View, Alert, AsyncStorage, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper, MenuIcon } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';
import {Orders} from '../Models/Orders';



export class OrderScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            orders : [],
            loaded : false
        }
    }

    componentWillMount(){
        Orders.orders().then(response => {
            console.log(response);
            if(response.result === 'true'){
                this.setState( { orders : response.orders, loaded : true } )
            }
        }).catch( error => {
            console.log(error);
        } )
    }

    render() {
        const PageLoader = (props) => this.__loader();
        return(
            <Wrapper style={{ backgroundColor: '#000' }} footer={this.state.loaded == false ? <PageLoader /> :null} >
                {/* header */}
                <Header style={{ backgroundColor : '#23BC7D' }}>
                    <View style={ styles.header.left }>
                        <CTouchable onPress={() => this.__back()}>
                            <Icon name={'arrow-left'} size={25} color={ '#fff' } />
                        </CTouchable>
                    </View>
                    <View style={ styles.header.center }>
                        <Text style={{ color : '#fff', fontSize : 18, fontFamily : 'OpenSans-Bold' }}>{'Deliveries'}</Text>
                    </View>
                </Header>
                {/* header */}
                
                <FlatList 
                        extraData={this.state}
                        data={this.state.orders}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={ () => this.__go('OrderDetailsScreen',{ data : item }) } style={{ backgroundColor : '#fff', marginVertical : 2, }}>
                                {/* <View style={ styles.orderScreenCartHeadingView }>
                                    <Text style={ styles.orderScreenCartHeadingView.text }>{'Jan 04, 5018'}</Text>
                                </View> */}
                                <View>
                                    <View style={ styles.orderScreenCartView }>
                                        <View style={ styles.orderScreenCartView.view }>
                                            <View>
                                                <Image
                                                    source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                                    style={ styles.orderScreenCartView.img }
                                                />
                                            </View>
                                            <View style={ { paddingHorizontal : 10 } }>
                                                <View>
                                                    <Text style={ styles.orderScreenCartView.view.heading }>{'#' + item.id}</Text>
                                                </View>
                                                <View>
                                                    <Text style={ styles.orderScreenCartView.view.text } >{item.created_at}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                            <View>
                                                <Text style={ styles.orderScreenCartView.view.heading }>{'$' + item.total}</Text>
                                            </View>
                                            <View>
                                                <Text style={ styles.orderScreenCartView.view.text } >{item.payment_type}</Text>
                                            </View>
                                        </View>
                                    </View>  
                                </View>
                            </TouchableOpacity> 
                        }   
                        keyExtractor={(item, index) => index} 
                        horizontal={false} 
                    />
                         
                </Wrapper>
        )
    }
}
