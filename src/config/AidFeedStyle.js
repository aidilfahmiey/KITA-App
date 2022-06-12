import {StyleSheet} from "react-native";
import color from './color';

export const aidfeedstyles = StyleSheet.create({
    feed: {
      flex: 1, 
      alignItems: 'center',
      backgroundColor: color.mainBackground,
      paddingTop: 10
    },
    card: {
        backgroundColor: color.backgroundBotTurquoise,
        width: '90%',
        marginBottom: 10,
        borderRadius: 10,
    },
    UserInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15
    },
    UserName: {
        fontSize: 14,
        fontWeight:'bold',
        color: color.white,
        fontFamily: 'sans-serif'
    },
    UserInfoText: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 1
    },
    applyButton: {
        backgroundColor: "#F9E79F",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        padding: 5,
        borderRadius: 8,
        marginLeft: '75%',
        marginBottom: '5%'
      },
      buttonText: {
        fontWeight: "700",
        fontSize: 14,
        color: "#17202A",
      },

})