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
            backgroundColor : '#00cc99'
        }
    },
    button : {
        backgroundColor: '#00cc99',
		borderRadius: 25,
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
        minWidth: '80%',
        marginVertical : 10,
        borderColor : '#00cc99',
    },
};