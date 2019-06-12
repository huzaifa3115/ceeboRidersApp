import {Dimensions} from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const fullWidth = '100%' ;
module.exports = {
    defaultBoldText : {
        fontFamily: 'OpenSans-Regular',   
    },
    defaultTextColor : {
        color : '#fff'
    },
    defaultBackgroundColor : {
        backgroundColor : '#23BC7D'
    },
    defaultIconColor : {
        color : '#23BC7D'
    },
    loginFormView : {
        paddingHorizontal : 40,
        label : {
          color : '#5e5e5e',
          fontFamily: 'OpenSans-Bold',
          fontSize : 15  ,
         
        },
        textField : {
            borderBottomWidth : 1,
            borderColor : '#9b9b9b'
        }
    },
    header: {
		left: {
			flex: 0.2, 
			alignItems: 'flex-start', 
			height: 50, 
			justifyContent: 'center'
		},
		center: {
			flex: 0.6, 
			height: 50, 
            justifyContent: 'center',
            alignItems: 'center', 
		},
		right: {
			flex: 0.2, 
			alignItems: 'flex-end', 
			height: 50, 
			justifyContent: 'center',
		},
		title: {
			fontSize: 17, 
			textAlign: 'center',
			color:'#fff'
		}
    },
    loginBtns : {
      
        btn : {
            borderWidth : 2,
            height : 50,
            backgroundColor : '#23BC7D'
        }
    },
    button : {
        backgroundColor: '#23BC7D',
		borderRadius: 25,
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
        minWidth: '80%',
        marginVertical : 10,
        borderColor : '#23BC7D',
    },

    drawerItemsView : {
        paddingHorizontal: 10, 
        borderBottomWidth : 1, 
        borderBottomColor : '#cccecd',
        view :{
            paddingHorizontal : 5
        },
        otherMenus : {
            paddingVertical : 10 
        },
        items :{
            flexDirection : 'row', 
            paddingVertical : 20,
            text : {
                color : '#000', 
                fontFamily : 'OpenSans-Regular', 
                fontSize : 16 
            }
        }
    },
    loaderOverlay: {
        flex : 1,
        position : 'absolute',
        left : 0,
        top : 0,
        opacity : 0.5,
        backgroundColor : 'black',
        width : viewportWidth,
        height : '100%'
    } ,

    orderScreenCartHeadingView : {
        paddingVertical : 15, 
        paddingHorizontal : 15, 
        borderBottomColor: '#f5f5f7', 
        borderBottomWidth : 2,
        text : {
            color : '#000', 
            fontSize : 15, 
            fontFamily : 'OpenSans-Bold'
        }
    },
    orderScreenCartView : {
        flexDirection : 'row', 
        flex : 1, 
        borderBottomColor: '#f5f5f7', 
        borderBottomWidth : 1, 
        paddingVertical :  15, 
        paddingHorizontal :  15,
        img : {
            borderRadius : 50, 
            width : 30, 
            height : 30
        },
        view : {
            flexDirection : 'row', 
            flex : 0.5, 
            alignItems  : 'flex-start',
            text : {
                color: 'grey', 
                fontSize: 11
            },
            heading : {
                color : '#000', 
                fontSize : 13, 
                fontFamily : 'OpenSans-Bold'
            }
        }
    },
    profileScreenInfoView : {
        paddingTop: 20, 
        paddingHorizontal: 15,
        view : {
            alignItems: 'flex-start', 
            borderBottomColor: 'grey', 
            borderBottomWidth: 0.3, 
            paddingVertical: 10,
            heading : {
                color: '#000', 
                fontSize: 18
            },
            infoText : {
                color: '#cacccb', 
                fontSize: 13
            },
            btn : {
                color: '#23BC7D', 
                fontSize: 13
            }
        }
    },
    menuIconHeader : {
        padding : 10
    },
    
};