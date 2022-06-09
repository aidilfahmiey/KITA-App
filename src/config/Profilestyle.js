import {StyleSheet} from "react-native";
import color from './color';

export const profilestyle = StyleSheet.create({

    main: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: color.mainBackground
    },
    mainUpper: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center', 
    },
    ProfileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -10,
        marginBottom: 10,
        color: color.black,
        fontFamily: 'sans-serif',
        alignItems: 'center', 
    },
    ProfileDetails: {
        fontSize: 15,
        marginTop: -10,
        marginBottom: 10,
        color: color.darkgrey,
        fontFamily: 'sans-serif',
        alignItems: 'center', 
    },
    ProfileImg: {
        marginTop: '5%',
        marginBottom: '5%',
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    mainUpperBtn: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        flexDirection: 'row',
    },
    userBtn: {
        borderColor: color.backgroundBotTurquoise,
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: color.backgroundBotTurquoise,
    },
    MapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: color.backgroundBotTurquoise,
        borderWidth: 2,
        marginTop: 15
        
    },
    map: {
        width: 300,
        height: 320,
        
    },
    callout:{
        width:150,
        height:20,
        margin:10,
        alignItems:'center',
    
    },
    mapText: {
        fontSize: 18,
        color: color.white,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
       
    },
    mapTextHolder: {
        backgroundColor: color.backgroundBotTurquoise,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})

