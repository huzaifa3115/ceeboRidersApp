import React from 'react';
import { View, Alert, AsyncStorage, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';



export class OrderScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <Wrapper style={{ backgroundColor: '#000' }}>
                {/* header */}
                <Header style={{ backgroundColor : '#fff' }}>
                    <View style={ styles.header.left }>
                        <CTouchable onPress={() => this.__back()} style={ {  } }>
                            <Icon name={'arrow-left'} size={25} color={ '#000' } />
                        </CTouchable>
                    </View>
                    <View style={ styles.header.center }>
                        <Text style={{ color : '#000', fontSize : 18, fontFamily : 'OpenSans-Bold' }}>{'Deliveries'}</Text>
                    </View>
                </Header>
                {/* header */}
                <TouchableOpacity onPress={ () => this.__go('OrderDetailsScreen') } style={{ backgroundColor : '#fff', marginVertical : 15, }}>
                    <View style={ { paddingVertical : 15, paddingHorizontal : 15, borderBottomColor: '#f5f5f7', borderBottomWidth : 2 } }>
                        <Text style={{ color : '#000', fontSize : 15, fontFamily : 'OpenSans-Bold' }}>{'Jan 04, 5018'}</Text>
                    </View>
                    <View>
                        <View style={ { flexDirection : 'row', flex : 1, borderBottomColor: '#f5f5f7', borderBottomWidth : 1, paddingVertical :  15, paddingHorizontal :  15 } }>
                            <View style={ { flexDirection : 'row', flex : 0.5, alignItems  : 'flex-start' } }>
                                <View>
                                    <Image
                                        source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                        style={ { borderRadius : 50, width : 30, height : 30 } }
                                    />
                                </View>
                                <View style={ { paddingHorizontal : 10 } }>
                                    <View>
                                        <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'8:40pm'}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'grey', fontSize: 11 }} >{'2 deliveries'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                <View>
                                    <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'$24.70'}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'grey', fontSize: 11 }} >{'$24.70 +  $24.70 tip'}</Text>
                                </View>
                            </View>
                        </View>  
                        <View style={ { flexDirection : 'row', flex : 1, borderBottomColor: '#f5f5f7', borderBottomWidth : 2, paddingVertical :  15, paddingHorizontal :  15 } }>
                            <View style={ { flexDirection : 'row', flex : 0.5, alignItems  : 'flex-start' } }>
                                <View>
                                    <Image
                                        source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                        style={ { borderRadius : 50, width : 30, height : 30 } }
                                    />
                                </View>
                                <View style={ { paddingHorizontal : 10 } }>
                                    <View>
                                        <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'8:40pm'}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'grey', fontSize: 11 }} >{'2 deliveries'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                <View>
                                    <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'$24.70'}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'grey', fontSize: 11 }} >{'$24.70 +  $24.70 tip'}</Text>
                                </View>
                            </View>
                        </View>  
                        <View style={ { flexDirection : 'row', flex : 1, borderBottomColor: '#f5f5f7', borderBottomWidth : 2, paddingVertical :  15, paddingHorizontal :  15 } }>
                            <View style={ { flexDirection : 'row', flex : 0.5, alignItems  : 'flex-start' } }>
                                <View>
                                    <Image
                                        source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                        style={ { borderRadius : 50, width : 30, height : 30 } }
                                    />
                                </View>
                                <View style={ { paddingHorizontal : 10 } }>
                                    <View>
                                        <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'8:40pm'}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'grey', fontSize: 11 }} >{'2 deliveries'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                <View>
                                    <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'$24.70'}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'grey', fontSize: 11 }} >{'$24.70 +  $24.70 tip'}</Text>
                                </View>
                            </View>
                        </View>                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.__go('OrderDetailsScreen') } style={{ backgroundColor : '#fff', marginVertical : 15, }}>
                    <View style={ { paddingVertical : 15, paddingHorizontal : 15, borderBottomColor: '#f5f5f7', borderBottomWidth : 2 } }>
                        <Text style={{ color : '#000', fontSize : 15, fontFamily : 'OpenSans-Bold' }}>{'Jan 05, 5018'}</Text>
                    </View>
                    <View>
                        <View style={ { flexDirection : 'row', flex : 1, borderBottomColor: '#f5f5f7', borderBottomWidth : 2, paddingVertical :  15, paddingHorizontal :  15 } }>
                            <View style={ { flexDirection : 'row', flex : 0.5, alignItems  : 'flex-start' } }>
                                <View>
                                    <Image
                                        source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                        style={ { borderRadius : 50, width : 30, height : 30 } }
                                    />
                                </View>
                                <View style={ { paddingHorizontal : 10 } }>
                                    <View>
                                        <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'8:40pm'}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'grey', fontSize: 11 }} >{'2 deliveries'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                <View>
                                    <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'$24.70'}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'grey', fontSize: 11 }} >{'$24.70 +  $24.70 tip'}</Text>
                                </View>
                            </View>
                        </View>  
                        <View style={ { flexDirection : 'row', flex : 1, borderBottomColor: '#f5f5f7', borderBottomWidth : 2, paddingVertical :  15, paddingHorizontal :  15 } }>
                            <View style={ { flexDirection : 'row', flex : 0.5, alignItems  : 'flex-start' } }>
                                <View>
                                    <Image
                                        source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                        style={ { borderRadius : 50, width : 30, height : 30 } }
                                    />
                                </View>
                                <View style={ { paddingHorizontal : 10 } }>
                                    <View>
                                        <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'8:40pm'}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'grey', fontSize: 11 }} >{'2 deliveries'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                <View>
                                    <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'$24.70'}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'grey', fontSize: 11 }} >{'$24.70 +  $24.70 tip'}</Text>
                                </View>
                            </View>
                        </View>  
                        <View style={ { flexDirection : 'row', flex : 1, borderBottomColor: '#f5f5f7', borderBottomWidth : 2, paddingVertical :  15, paddingHorizontal :  15 } }>
                            <View style={ { flexDirection : 'row', flex : 0.5, alignItems  : 'flex-start' } }>
                                <View>
                                    <Image
                                        source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                        style={ { borderRadius : 50, width : 30, height : 30 } }
                                    />
                                </View>
                                <View style={ { paddingHorizontal : 10 } }>
                                    <View>
                                        <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'8:40pm'}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'grey', fontSize: 11 }} >{'2 deliveries'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                <View>
                                    <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'$24.70'}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'grey', fontSize: 11 }} >{'$24.70 +  $24.70 tip'}</Text>
                                </View>
                            </View>
                        </View>   
                        <View style={ { flexDirection : 'row', flex : 1, borderBottomColor: '#f5f5f7', borderBottomWidth : 2, paddingVertical :  15, paddingHorizontal :  15 } }>
                            <View style={ { flexDirection : 'row', flex : 0.5, alignItems  : 'flex-start' } }>
                                <View>
                                    <Image
                                        source={ require('./../../assets/img/apple-icon-cirlce.jpg') }
                                        style={ { borderRadius : 50, width : 30, height : 30 } }
                                    />
                                </View>
                                <View style={ { paddingHorizontal : 10 } }>
                                    <View>
                                        <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'8:40pm'}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'grey', fontSize: 11 }} >{'2 deliveries'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ { flex : 0.5, alignItems  : 'flex-end'  } }>
                                <View>
                                    <Text style={{ color : '#000', fontSize : 13, fontFamily : 'OpenSans-Bold' }}>{'$24.70'}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'grey', fontSize: 11 }} >{'$24.70 +  $24.70 tip'}</Text>
                                </View>
                            </View>
                        </View>                        
                    </View>
                </TouchableOpacity>
            </Wrapper>
        )
    }
}
