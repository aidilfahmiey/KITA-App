import React, { Component } from 'react';
import {Pressable, Text, View } from 'react-native';
import styles from '../../config/style';
import color from '../../config/color';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {FontAwesome5 } from '@expo/vector-icons';
import {MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser, fetchUserPosts, clearData} from '../../redux/actions/index';

import Homescreen from './main/Homescreen'
import Aidscreen from './main/Aidscreen';
import Profilescreen from './main/Profilescreen';
import Suggestionscreen from './main/Suggestionscreen'
import Complaintscreen from './main/Complaintscreen'

const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {
  componentDidMount(){
    this.props.clearData();
    this.props.fetchUser();
    this.props.fetchUserPosts();
  }
  render() {
    const{ currentUser}= this.props;

    console.log();
    if(currentUser==undefined){
      return(
        <View></View>
      )
    }
    return (
      <Tab.Navigator
        initialRouteName= 'Homescreen'
        activeColor= {color.white}
        inactiveColor= {color.darkTurquoise}
        barStyle={{ backgroundColor: color.backgroundBotTurquoise }}
      > 
        <Tab.Screen
          name = "Home"
          component={Homescreen}
          options= {{
            tabBarIcon: ({focused, color, size})=> (
              <MaterialCommunityIcons name='home' color={color} size={28}/>
            )
          }}
        />
        <Tab.Screen
          name = "Complaint"
          component={Complaintscreen}
          options= {{
            tabBarIcon: ({focused, color, size})=> (
              <Ionicons name="md-newspaper" color={color} size={24}/>
            )
          }}
        />
        <Tab.Screen
          name = "Aid"
          component={Aidscreen} 
          options= {{
            tabBarIcon: ({focused,color, size})=> (
              <FontAwesome5 name='hands-helping' color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name = "Suggestion"
          component={Suggestionscreen}
          options= {{
            tabBarIcon: ({focused, color, size})=> (
              <MaterialCommunityIcons name="lightbulb-on" color={color} size={24}/>
            )
          }}
        />
        <Tab.Screen
          name = "Profile"
          component={Profilescreen}
          options= {{
            tabBarIcon: ({focused, color, size})=> (
              <MaterialIcons name="account-circle" color={color} size={24} />
            )
          }}
        />
        
      </Tab.Navigator>
    )
  }
}

const mapStateToProps= (store)=> ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps= (dispatch)=> 
  bindActionCreators({fetchUser, fetchUserPosts, clearData}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main);