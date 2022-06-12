import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, RefreshControl, TouchableOpacity, Alert, ScrollView, Dimensions} from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import {connect} from 'react-redux';
import { profilestyle } from '../../../config/Profilestyle';
import Firebase from '../../../database/firebase';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {fetchUser} from '../../../redux/actions/index';

function Profilescreen(props,{navigation}) {
  const { currentUser, posts} = props;
  const [refresh, setRefresh] = useState(false);
  console.log({currentUser, posts})

  const navigateToPrevScreen = () => {
    props.navigation.navigate("Profile"); 
    console.log('Return to profile')
  }

  const navigateToEditScreen = () => {
    props.navigation.navigate("Edit Profile");
    console.log('Go to edit profile page')
  }

  const onLogout = ()=> {
    Firebase.auth().signOut();
    console.log('Account logout')
  }

  const twoOptionsAlertFunction = () => {
    Alert.alert(
      'Logout account: '+(currentUser.name),
      'Are you confirm to logout?',
      [
        { text: 'Yes', onPress: () => onLogout()},
        { text: 'No', onPress: () => navigateToPrevScreen()},
      ],
      { cancelable: false }
    );
  }

  const pullRefresh = () =>{
    fetchUser()
    setRefresh(true)

    setTimeout(()=>{
      setRefresh(false)
    },10000)
  }

  const {pin, setPin}= React.useState({
    latitude: 3.1276306667385088, 
    longitude: 101.59564717471058})

  return (
    <View style={profilestyle.main}>
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={()=>pullRefresh()}
        />
      }>

      <View style={profilestyle.mainUpper}>
      <Image
        style={profilestyle.ProfileImg}
        source={{uri:currentUser.profileImage}}/>
        <Text style={profilestyle.ProfileName}>{currentUser.name}</Text>
        <Text style={profilestyle.ProfileDetails}>{currentUser.address} {currentUser.state}, {currentUser.postcode}</Text>

        <View style={profilestyle.mainUpperBtn}>
          <TouchableOpacity
            style={profilestyle.userBtn}
            onPress={() => navigateToEditScreen()}
          >
            <Text style={profilestyle.userBtnTxt}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={profilestyle.userBtn} onPress={() => {}}>
            <Text 
              style={profilestyle.userBtnTxt}
              onPress={() => twoOptionsAlertFunction()}
              >Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={profilestyle.MapContainer}>
        <View style={profilestyle.mapTextHolder}>
        <Text style={profilestyle.mapText}>Food Bank</Text>
        </View>
          
          <MapView 
            style={profilestyle.map}  
            initialRegion={{
            latitude: 3.1276306667385088, 
            longitude: 101.59564717471058,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}>

            <Marker coordinate={{latitude: 3.1296125762980753,
              longitude: 101.5993593771371,}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Jaya Grocer Mutiara</Text></Callout>
              
            </Marker>

            <Marker coordinate={{latitude: 3.1232372475439294, 
              longitude: 101.59350113748225,}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Shell Petaling Jaya</Text></Callout>
            </Marker>

            <Marker coordinate={{latitude: 3.106647732504003, 
              longitude: 101.53966135621228,}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Petronas NKVE</Text></Callout>
            </Marker>

            <Marker coordinate={{latitude: 3.106082167797479,  
              longitude: 101.59575727966774,}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Paradigm Mall</Text></Callout>
            </Marker>
            
            <Marker coordinate={{latitude: 3.1202661840187567, 
              longitude: 101.59227297732717}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Surau Vista Subang</Text></Callout>
            </Marker>

            <Marker coordinate={{latitude: 3.118125879860391, 
              longitude: 101.58405630516945}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Masjid Ara Damansara</Text></Callout>
            </Marker>

            <Marker coordinate={{latitude: 3.1265593729988916,
              longitude: 101.60671932206772}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Masjid Bandar Utama</Text></Callout>
            </Marker>
            
            <Marker coordinate={{latitude: 3.1475992304529337, 
              longitude: 101.61148292516859}}>
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>Masjid As Syakirin</Text></Callout>
            </Marker>

            <Marker coordinate={{latitude: 3.1595544795482966,
              longitude: 101.59199935969075}}> 
              <Image source={require('../../../../assets/food.png')} style={{height: 30, width:30 }} />
              <Callout style={profilestyle.callout}><Text>NSK Trade City</Text></Callout>
            </Marker>
       
          </MapView>
        </View>

      </View>
    </ScrollView>
  </View>
  )
}


const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts
})
export default connect(mapStateToProps, null)(Profilescreen);