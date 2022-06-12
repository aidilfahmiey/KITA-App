import {StyleSheet} from "react-native";
import color from './color';

export const feedstyles = StyleSheet.create({
    feed: {
      flex: 1, 
      alignItems: 'center',
      backgroundColor: color.mainBackground,
      borderBottomWidth: 2,
      borderColor: color.white,
      width: '100%'
    },
    WH: {
        
        backgroundColor: color.white,
        width: '75%',
        height: '80%',
        borderRadius: 50,
        borderColor: color.darkgrey,
        borderWidth:1,
        marginLeft: 10,
        padding:10
    },
    textWH: {
        

    },
    cardWH: {
        borderBottomWidth: 1,
        borderColor: color.darkgrey,
        width: '90%',
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom:10,
        marginBottom: 20
    },
    UserInfoWH: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    UserImgWH: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: '3%'
    },
    card: {
        backgroundColor: color.lightgrey,
        width: 320,
        marginBottom: 10,
        borderRadius: 10,
        paddingTop:10,
        marginBottom: 20,
    },
    UserInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15
    },
    UserImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    UserName: {
        fontSize: 14,
        fontWeight:'bold',
        color: color.black,
        fontFamily: 'sans-serif'
    },
    UserInfoText: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    PostTime: {
        fontSize: 12,
        fontFamily: 'sans-serif-condensed',
        color: '#666'
    },
    PostText: {
        fontSize: 14,
        color: color.black, 
        fontFamily: 'sans-serif',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    PostImg: {
        width: '100%',
        height: 250,
        marginTop: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    Divider: {
        
    }
});