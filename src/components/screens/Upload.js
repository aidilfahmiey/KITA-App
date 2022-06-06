import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
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

    const uploadPost = async () => {

        const uri = props.route.params.image;
        const UserText = props.route.params.WHText;
        const childPath = `post/${Firebase.auth().currentUser.uid}/${'Image'+Math.random().toString(36)}`;
        console.log(childPath)
        console.log(uri)
        console.log(UserText)
    
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
      const UserText = props.route.params.WHText;

      console.log("save post data run")
        Firebase
            .firestore()
            .collection('posts')
            .doc(Firebase.auth().currentUser.uid)
            .collection('userPosts')
            .add({
                downloadURL,
                creation: serverTimestamp(),
                UserText: UserText,
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

        <Image source={{uri: props.route.params.image}}/>

        <Modal visible={true}>
            <View style={uploadstyle.modal}>
                <Text style={uploadstyle.modalTextHeader}>Confirmation</Text>

                <TouchableOpacity
                    style={uploadstyle.modalTextButton}
                    onPress={() => uploadPost()}>
                    <Text style={uploadstyle.modalTextButtonConfirm}>Post</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={uploadstyle.modalTextButton}
                    onPress={navigateToPrevScreen}>
                    <Text style={uploadstyle.modalTextButtonReturn}>Discard</Text>
                </TouchableOpacity>

            </View>
        </Modal>

    </View>
  )
}