import {StyleSheet} from "react-native";
import color from './color';

export const suggestionstyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: color.mainBackground,
        
      },
      containerMain: {
        padding: 35,
      },
      documents:{
        fontSize: 14,
        marginLeft: 5,
        paddingVertical: 5,
      }, 
      inputText: {
        borderColor: "#48C9B0",
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        width:"90%",
        height:"40%",
        alignSelf:"center",
        borderRadius: 15,
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '25%',
        paddingRight:40,
        width:"90%",
        alignSelf:"center",
        justifyContent: 'space-between',
      },
      paragraph: {
        fontSize: 12,
        margin:5,
      },
      checkbox: {
        margin: 8,
      },
      mainBody: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
      },
      submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: color.backgroundBotTurquoise,
        width: '50%',
        height: '30%',
        borderRadius: 10,
        marginTop:10,
        borderRadius: 15,
      },
      submitText: {
        color: "#FFFFFF",
        fontWeight: 'bold',
        fontSize: 18,
      },

})

 