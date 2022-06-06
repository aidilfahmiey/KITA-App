import { View, Text, Image, Modal, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { uploadstyle } from '../../config/Upload';
import { getAuth } from "firebase/auth";
require("@react-native-firebase/firestore")
require("@react-native-firebase/storage")
import Firebase from '../../database/firebase';
import { serverTimestamp } from 'firebase/firestore'

export default function Upload(props, {navigation}) {
    console.log(props.route.params.image)
    console.log(props.route.params.WHText)

    const UserText = props.route.params.WHText;
    const uri = props.route.params.image;

    
    const uploadPost = async () => {

      if (uri == null) {
        Alert.alert('Must include photo.')
        return;
      }
        
        const childPath = `post/${Firebase.auth().currentUser.uid}/${'Image'+Math.random().toString(36)}`;
        console.log(childPath)
        console.log(uri)
    
        const response = await fetch(uri)
        const blob = await response.blob();
    
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
            
            savePostData(snapshot);
            
            
          })
        }
    
        const taskError = (snapshot) => {
          console.log(snapshot)
        }
    
        task.on("state_changed", taskProgress, taskError, taskCompleted)
        
        
        props.navigation.navigate("KITA App");
    }
    
    
      const savePostData = (downloadURL) => {

          console.log("save post data run")
          Firebase
              .firestore()
              .collection('posts')
              .doc(Firebase.auth().currentUser.uid)
              .collection('userPosts')
              .add({
                  downloadURL: downloadURL,
                  creation: serverTimestamp(),
                  UserText: UserText,
                  uid: Firebase.auth().currentUser.uid,
              }).then((function (){
                props.navigation.navigate("KITA App");
              })) 
      }

    const navigateToPrevScreen = () => {
        props.navigation.navigate("Create Post");
      }

  return (
    <View style={uploadstyle.main}>

      <View style={uploadstyle.contain}>
      
        <Text style={uploadstyle.modalTextHeader}>Confirm update?</Text>

          <TouchableOpacity
            style={uploadstyle.ButtonConfirm}
            onPress={() => uploadPost()}>
            <Text style={uploadstyle.modalTextButtonConfirm}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={uploadstyle.ButtonReturn}
            onPress={navigateToPrevScreen}>
            <Text style={uploadstyle.modalTextButtonReturn}>Discard</Text>
          </TouchableOpacity>

      </View>

    </View>
  )
}

