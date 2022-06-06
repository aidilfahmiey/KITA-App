import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { camerastyle } from '../../config/CameraStyle';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CameraPhoto({navigation}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

    })();
  }, []);

  const takePicture = async () => {
    if(camera){
      const data = await camera.takePictureAsync(null);
      console.log(data.uri)
      setImage(data.uri);
    }
  }
  
  const navigateToPrevScreen = () => {
    navigation.navigate("Create Post");
  }

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={camerastyle.container}>
        <Camera 
          ref={ref => setCamera(ref)}
          style={camerastyle.fixedRatio}
          type={type}
          ratio = {'4:3'}
          />
      </View>

      <View style = {camerastyle.Utils}>
        <TouchableOpacity>
          <Entypo name="back" 
            size={30} 
            color="black" 
            onPress={navigateToPrevScreen}
            />
        </TouchableOpacity>

        <TouchableOpacity style = {camerastyle.CamUtils}>
          <MaterialIcons 
            name="camera" 
            size={70} 
            color="black" 
            onPress={()=> takePicture()}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons 
            name="camera-reverse-sharp" 
            size={30} 
            color="black"
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
                );
              }}
          />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};
