import {StyleSheet} from "react-native";
import color from './color';

export const poststyle = StyleSheet.create({

    InputWrapper: {
        flex:1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: color.mainBackground,
    },
    InputField: {
        textAlignVertical : 'top',
        fontSize: 18,
        width: '100%',
        backgroundColor: color.white,
        padding: 15,
    },
    Divider: {
        borderBottomWidth: 1,
        borderBottomColor: color.lightgrey,
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    PostButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: '-65%',
        backgroundColor: color.backgroundBotTurquoise,
        width: '25%',
        height: '5%',
        borderRadius: 10,
        marginTop:10
    },
    PostText: {
        fontSize: 14,
        color: color.white,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
      AddImage: {
          width: '100%',
          height: 250,
          marginBottom: 15
      }


})