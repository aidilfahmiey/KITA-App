import {StyleSheet} from "react-native";
import color from './color';

export const editprofilestyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionDate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#333333',
    },
    datePickerStyle: {
        width: '100%',
        marginLeft: 5
        
      },
      submitBtn: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: color.backgroundBotTurquoise,
        alignItems: 'center',
        marginTop: 10,
      },
      discardBtn: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: color.red,
        alignItems: 'center',
        marginTop: 10,
      },
      submitText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
})