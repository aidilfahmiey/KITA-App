import {StyleSheet} from "react-native";
import color from './color';

export const uploadstyle = StyleSheet.create({
    main: {
        
        alignItems: 'center',
        width: '100%',
    },
    modal: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '50%',
        width: '70%',
        height: '30%',
        backgroundColor: '#a8a8a8',
        borderRadius: 30
    },
    modalTextHeader: {
        color: color.black,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '10%',
        marginBottom: '10%'
    },
    modalTextButtonConfirm: {
        color: color.darkTurquoise,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '3%'
    },
    modalTextButtonReturn: {
        color: color.red,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '3%'
    },
    modalTextButton: {
        width: '60%',
        height: '20%',
        marginTop: '3%',
        marginBottom: '4%',
        borderColor: color.white,
        borderWidth:3,
        borderRadius: 10
    },
    
    
});