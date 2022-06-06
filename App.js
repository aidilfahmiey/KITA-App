import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View, LogBox } from 'react-native';
import styles from './src/config/style';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Firebase from './src/database/firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/reducers';
import thunk from 'redux-thunk';

import CitizenLogin from './src/components/screens/auth/CitizenLogin'
import CitizenRegister from './src/components/screens/auth/CitizenRegister'
import AuthoritiesLogin from './src/components/screens/auth/AuthoritiesLogin'
import AuthoritiesRegister from './src/components/screens/auth/AuthoritiesRegister'

import Start from './src/components/screens/Start';
import Main from './src/components/screens/Main';
import Posts from './src/components/screens/Posts';
import Upload from './src/components/screens/Upload';
import Aidscreen from './src/components/screens/main/Aidscreen';
import color from './src/config/color';

const Stack = createStackNavigator();
const store= createStore(rootReducer, applyMiddleware(thunk));

LogBox.ignoreAllLogs()

export class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      loaded: false,
    }
  }

  componentDidMount(){
    Firebase.auth().onAuthStateChanged((user)=> {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const {loggedIn, loaded}= this.state;
    if(!loaded){
      return(
        <View style={styles.containerMain}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen
              name="Start"
              component={Start}
              navigation={this.props.navigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Citizen"
              component={Citizen}
              navigation={this.props.navigation}
              //options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authorities"
              component={Authorities}
              navigation={this.props.navigation}
              //options={{ headerShown: false }}
            />
          </Stack.Navigator>  
        </NavigationContainer>
      )
    }

    return(
     
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="KITA App"
              component={Main}
              navigation={this.props.navigation}
              options={{ 
                headerStyle: {
                  backgroundColor: color.mainBackground,
                  borderBottomWidth: 1
                },
                headerTitleAlign: 'center',
                headerTintColor: color.backgroundBotTurquoise
                
              }}
            />
            <Stack.Screen
              name="Create Post"
              component={Posts}
              navigation={this.props.navigation}
              options={{ 
                headerStyle: {
                  backgroundColor: color.mainBackground,
                  borderBottomWidth: 1
                },
                headerTintColor: color.backgroundBotTurquoise
              }}
            />
            <Stack.Screen
              name="Post"
              component={Upload}
              navigation={this.props.navigation}
              options={{ 
                headerStyle: {
                  backgroundColor: color.mainBackground,
                  borderBottomWidth: 1
                },
                headerTintColor: color.backgroundBotTurquoise
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App

const Citizen = (props) => {
  return (
    <Stack.Navigator initialRouteName="CitizenLogin">
      <Stack.Screen
        name="CitizenRegister"
        component={CitizenRegister}
        navigation={props.navigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CitizenLogin"
        navigation={props.navigation}
        component={CitizenLogin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const Authorities = (props) => {
  return (
    <Stack.Navigator initialRouteName="AuthoritiesLogin">
      <Stack.Screen
        name="AuthoritiesRegister"
        component={AuthoritiesRegister}
        navigation={props.navigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthoritiesLogin"
        component={AuthoritiesLogin}
        navigation={props.navigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
  