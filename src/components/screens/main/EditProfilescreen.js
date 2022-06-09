import { View, Text, TouchableOpacity, Alert, ImageBackground, TextInput, ScrollView} from 'react-native';
import React, { useState } from 'react'
import {connect} from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { editprofilestyle } from '../../../config/EditProfileStyle';
import color from '../../../config/color';
import * as ImagePicker from 'expo-image-picker';
import Firebase from '../../../database/firebase';
import { serverTimestamp } from 'firebase/firestore'

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


function EditProfilescreen(props,{navigation}){

    
    const {currentUser} = props;

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [state, setState] = useState('');
    const [profileImage, setProfileImage] = useState('');

    const pickImage = async () => {
        const profileImage = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
    
        console.log(profileImage.uri);
    
        if (!profileImage.cancelled) {
            setProfileImage(profileImage.uri);
        }
      };

      const uploadProfileImage = async () => {

        if (profileImage == null) {
          Alert.alert('Must change photo.')
          return;
        }
          
          const childPath = `profilePicture/${Firebase.auth().currentUser.uid}/${'ProfileImage'+Math.random().toString(36)}`;
          console.log(childPath)
          console.log(profileImage)
      
          const response = await fetch(profileImage)
          const blob = await response.blob();
          Alert.alert('Please wait for awhile')
          const task = Firebase
                        .storage()
                        .ref()
                        .child(childPath)
                        .put(blob)
      
          const taskProgress = (snapshot) => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
          }
      
          const taskCompleted = (snapshot) => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
              
              console.log(snapshot);
              saveProfileImageData(snapshot);
              
              
            })
          }
      
          const taskError = (snapshot) => {
            console.log(snapshot)
          }
          
      
          task.on("state_changed", taskProgress, taskError, taskCompleted)
          
      }
      
      
        const saveProfileImageData = (downloadURL) => {
  
            console.log("save profile image data run")
  
            const docUpdate = Firebase.firestore().collection('users').doc(Firebase.auth().currentUser.uid);
            docUpdate.set({
                    name: name,
                    date: date,
                    address: address,
                    postcode: postcode,
                    state: state,
                    profileImage: downloadURL,
                  
                }).then((function (){
                    props.navigation.navigate("KITA App");
                }))           
        }
  
        const navigateToPrevScreen = () => {
            props.navigation.navigate("Profile");
            console.log('Return to profile')
        }
  
      
    

  return (
    <View style={editprofilestyle.container}>
    <ScrollView>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                onPress={()=>pickImage()}
            >
                <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                }}>
                    <ImageBackground
                        source={{uri:profileImage}}
                        style={{height:80, width:80, opacity:1}}
                        imageStyle={{borderRadius: 40}}
                    >
                        <View style={{
                            flex: 1,
                            backgroundColor: color.darkgrey,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            opacity:0.8
                        }}>
                            <FontAwesome name="camera" size={40} color="white" style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}/>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{currentUser.name}</Text>
        </View>

        <View style={editprofilestyle.action}>
            <Ionicons name="person-outline" size={20} color="black" />
            <TextInput
                placeholder={currentUser.name}
                placeholderTextColor={color.darkgrey}
                style={editprofilestyle.textInput}
                value={name}
                onChangeText= {(name)=> setName(name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').replace(/[^a-z0-9]/gi, ''))}
            />
        </View>
        
        <View style={editprofilestyle.action}>
        <MaterialCommunityIcons name="map-marker-outline" size={22} color="black" />
            
            <TextInput
                placeholder='Address'
                placeholderTextColor={currentUser.address}
                style={editprofilestyle.textInput}
                onChangeText= {(address)=> setAddress(address)}
            />
        </View>
        <View style={editprofilestyle.action}>
            <Entypo name="address" size={20} color="black" />
            <TextInput
                placeholder={currentUser.postcode}
                placeholderTextColor={color.darkgrey}
                style={editprofilestyle.textInput}
                onChangeText= {(postcode)=> setPostcode(postcode)}
            />
        </View>
        <View style={editprofilestyle.action}>
            <Entypo name="location" size={20} color="black" />
            <TextInput
                placeholder={currentUser.state}
                placeholderTextColor={color.darkgrey}
                style={editprofilestyle.textInput}
                onChangeText= {(state)=> setState(state)}
            />
        </View>
        <View style={editprofilestyle.actionDate}>
            <Fontisto name="date" size={20} color="black" />
            <DatePicker
                        style={editprofilestyle.datePickerStyle}
                        
                        date={date} // Initial date from state
                        mode="date" // The enum of date, datetime and time
                        placeholder={currentUser.date}
                        format="DD-MM-YYYY"
                        minDate="01-01-1800"
                        maxDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                width:0,
                                height:0,
                            },
                            dateInput: {
                                borderBottomWidth: 0,
                                borderTopWidth: 0,
                                borderRightWidth: 0,
                                borderLeftWidth: 0,
                                padding: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                
                            },
                        }}
                    onDateChange={(date) => {setDate(date);}}
                    />
        </View>
        <TouchableOpacity 
            style={editprofilestyle.submitBtn}
            onPress={() => uploadProfileImage()}>
            <Text style={editprofilestyle.submitText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={editprofilestyle.discardBtn}
            onPress={() => navigateToPrevScreen()}>
            <Text style={editprofilestyle.submitText}>Discard</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
  })
  export default connect(mapStateToProps, null)(EditProfilescreen);