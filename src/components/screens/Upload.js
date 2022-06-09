import { View, Text, Image, Modal, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
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
    const [user, setUser] = useState();
    
    const getUser = async () => {
      const documentSnapshot = await Firebase.firestore()
                              .collection("users")
                              .doc(Firebase.auth().currentUser.uid)
                              .get();
      const userData = documentSnapshot.data();
      setUser(userData);        
    }

    useEffect(() => {
      getUser();
    },[]); 
    
    

    const uploadPost = async () => {

      if (uri == null) {
        Alert.alert('Must include photo.')
        return;
      }
      if (UserText == null) {
        Alert.alert('Must include text.')
        return;
      }
        
        const childPath = `post/${Firebase.auth().currentUser.uid}/${'Image'+Math.random().toString(36)}`;
        console.log(childPath)
        console.log(uri)
        console.log(user.postcode)
    
        const response = await fetch(uri)
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
            savePostData(snapshot);
            
            
          })
        }
    
        const taskError = (snapshot) => {
          console.log(snapshot)
        }
    
        task.on("state_changed", taskProgress, taskError, taskCompleted)
        
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
                Postcode: user.postcode,
                uid: Firebase.auth().currentUser.uid,
            }).then((function (){
              props.navigation.navigate("KITA App");
            })) 
         
      }

    const navigateToPrevScreen = () => {
        props.navigation.navigate("KITA App");
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

