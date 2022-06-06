import {StyleSheet} from "react-native";
import color from './color';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 10,
    
  },
  containerMain: {
    padding: 35,
    flex: 1,
  },
  mainBackground: {
    backgroundColor: color.mainBackground,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 25,
    color: 'darkslategray',
    textAlign: 'center'
  },
  providerImage: {
    resizeMode: "contain",
    height: 100,
    width: 200,
    marginBottom: 50,
    marginTop: 50
  },
  containerImage: {

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  providerButton: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  providerButtonText: {
    paddingRight: 20
  },
  containerBottomButton: {
    backgroundColor: 'ghostwhite',
    padding: 20,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgray'
  },
  containerBottomButtonText: {
    fontWeight: 'bold',
    color: 'blue'
  },
  datePickerStyle: {
    width: '100%',
    margin: 5,
    
  },
  inputText: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTextReg: {
    borderColor: color.backgroundBotTurquoise,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5
  },
  providerImageAuth: {
    resizeMode: "contain",
    height: 100,
    width: 200,
    marginBottom: 20,
    marginTop: -10
  },
  containerImageAuth: {

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  AuthButtonRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: color.backgroundBotTurquoise,
    width: '60%',
    height: '10%',
    borderRadius: 10,
    marginTop:10
  },
  AuthButtonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: color.backgroundBotTurquoise,
    width: '60%',
    height: '20%',
    borderRadius: 10,
    marginTop:10
  },
  AuthText: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 15
  },
  Agreement:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    fontSize: 10,
    marginTop: 70,
  },
  AskAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    marginTop:5
  },
  AskAccountLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    marginTop: 5
  },
  bottomTextInput: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    flexDirection: 'row',
   
  },
  inputTextBottom: {
    
    width: '48%',
    borderColor: color.backgroundBotTurquoise,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    padding: 5,
    
  },
  LoginEmail: {
    alignItems: 'center',
    margin: 5,
    flexDirection: 'row',
    borderColor: color.backgroundBotTurquoise,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  LoginEmailIcon: {
    width: 20,
    marginLeft:10,
    marginRight: 10
  },
  LoginPassword:{
    alignItems: 'center',
    margin: 5,
    flexDirection: 'row',
    borderColor: color.backgroundBotTurquoise,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  LoginPasswordIcon:{
    width: 20,
    marginLeft:10,
    marginRight: 10
  },
  PostsIcon: {
    justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      paddingLeft: '77%',
      paddingBottom: '3%'
  }
});

export default styles;