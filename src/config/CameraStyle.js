import {StyleSheet} from "react-native";
import color from './color';

export const camerastyle = StyleSheet.create({

    
    container: {
        flex: 1,
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    }, 
    Utils: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        flexDirection: 'row',
    },
    CamUtils: {
        marginLeft: 35,
        marginRight: 35
    }

})