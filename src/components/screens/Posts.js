import { View, Text, TextInput, Alert, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import ActionButton from 'react-native-action-button';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import { getAuth } from "firebase/auth";

import { Ionicons } from '@expo/vector-icons';

import { camerastyle } from '../../config/CameraStyle';
import { feedstyles } from '../../config/FeedStyle';
import { poststyle } from '../../config/PostStyle';

const Posts = ({navigation}) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [WHText, setWHText] = useState("");

  useEffect(() => {
    (async () => {
      const galleryStatus= await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');

      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

    })();
  }, []);

  const takePicture = async () => {
    if(camera){
      const image = await camera.takePictureAsync(null);
      console.log(image.uri)
      console.log(getAuth().currentUser.uid)
      setImage(image.uri);
    }
  }

  const pickImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(image.uri);
    console.log(getAuth().currentUser.uid)

    if (!image.cancelled) {
      setImage(image.uri);
    }
  };

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (hasGalleryPermission === null) {
    return <View />;
  }
  if (hasGalleryPermission === false) {
    return <Text>No access to gallery</Text>;
  }

  return (
    <View style={feedstyles.feed}>
      <View style={poststyle.InputWrapper}>
      
        <TextInput
          style = {poststyle.InputField}
          multiline = {true}
          numberOfLines = {3}
          maxLength = {500}
          onChangeText= {(WHText)=> setWHText(WHText)}
          placeholder = "What's happening?"
        />
        
        <View style={poststyle.Divider}/>

        <View style={{ width: '90%', height: '30%',  alignItems: 'center' }}>
          <View style={camerastyle.container}>
            <Camera 
              ref={ref => setCamera(ref)}
              style={camerastyle.fixedRatio}
              type={type}
              ratio = {'4:3'}
            />
          </View>
        </View>

        <View style={poststyle.Divider}/>

        {image && <Image source={{uri:image}} style={{width: '55%', height: '30%'}}/>}

      </View>

      <ActionButton buttonColor="#167D7F">
          
          <ActionButton.Item buttonColor='#3498db' title="Take Photo" onPress={() => takePicture()}>
            <Ionicons name="md-camera-outline" style={poststyle.actionButtonIcon}/>
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#1abc9c' title="Choose Photo" onPress={() => pickImage()}>
            <Ionicons name="md-duplicate-outline" style={poststyle.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#00b300' title="Post" onPress={() => navigation.navigate('Post',{image,WHText})}>
            <Ionicons name="md-push-outline" style={poststyle.actionButtonIcon}/>
          </ActionButton.Item>

      </ActionButton>
    </View>
  )
};

export default Posts;