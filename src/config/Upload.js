import {StyleSheet} from "react-native";
import color from './color';

export const uploadstyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#a8a8a8',
    },
    contain: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '35%',
        width: '80%',
        height: '30%',
        backgroundColor: color.white,
    },
    modalTextHeader: {
        color: color.black,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '10%',
        marginBottom: '3%'
    },
    modalTextButtonConfirm: {
        color: color.white,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        marginBottom: '3%',
    },
    modalTextButtonReturn: {
        color: color.white,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        marginBottom: '3%',
    },
    ButtonConfirm: {
        width: '60%',
        height: '20%',
        marginTop: '3%',
        marginBottom: '3%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#00cd00',
        shadowColor: color.black,
        elevation: 10,
        borderRadius: 100,
    },
    ButtonReturn: {
        width: '60%',
        height: '20%',
        marginTop: '3%',
        marginBottom: '3%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff0000',
        shadowColor: color.black,
        elevation: 10,
        borderRadius: 50
    },
    
    
});