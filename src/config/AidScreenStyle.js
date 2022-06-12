import {StyleSheet} from "react-native";
import color from './color';

export const aidscreenstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.mainBackground,
        paddingTop: '5%',
        paddingBottom: '5%'
      },
      listItem:{
        margin:5,
        padding:10,
        backgroundColor:"#167D7F",
        width:"90%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:8,
      },
})