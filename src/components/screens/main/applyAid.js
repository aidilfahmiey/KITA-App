import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Entypo } from '@expo/vector-icons'; 
import DocumentPicker from 'react-native-document-picker';
import { aidapplicationstyle } from '../../../config/AidApplicationStyle';

export default function Applyaidscreen({navigation}) {

  const [name, setName] = useState('');
  const [nric, setNric] = useState('');
  const [address, setAddress] = useState('');
  const [singleFile, setSingleFile] = useState(null);
  
  const AidApplication= ()=> {
    if(
      name == '' ||
      nric == '' ||
      address == ''
    ){
    alert('Enter complete details to proceed the application');
    }
    else {
    navigation.navigate('Home')
    alert('Your application submitted successfully');
    }
  };

  const uploadImage = async () => {
    if (singleFile != null) {
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      let res = await fetch(
        'http://localhost/upload.php',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('res : ' + JSON.stringify(res));
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const [isChecked, setChecked] = useState(false);

  return(

    <View style={aidapplicationstyle.container}>
    <ScrollView>
    <View style={aidapplicationstyle.containerMain}>
            
        <TextInput
        style={aidapplicationstyle.inputText}
        placeholder= 'Name' placeholderTextColor="grey"
        value={name}
        onChangeText= {(name)=> setName(name)}
        />

        <TextInput
        style={aidapplicationstyle.inputText}
        placeholder= 'I/C Number' placeholderTextColor="grey"
        onChangeText= {(nric)=> setNric(nric)}
        />
        
        <TextInput
        style={aidapplicationstyle.inputText}
        placeholder= 'Address' placeholderTextColor="grey"
        onChangeText= {(address)=> setAddress(address)}
        />
    {singleFile != null ? (
     <Text style={aidapplicationstyle.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
      </Text>
       ) : null}

      <View style={aidapplicationstyle.Upload}>
          <View style={aidapplicationstyle.UploadIcon}>
          <Entypo name="upload" size={20} color="black" />
          </View>
          <Text style={aidapplicationstyle.documents}>Upload required documents</Text>
      </View>

      <View style={aidapplicationstyle.UploadSelectButton}>
      <View style={aidapplicationstyle.Select}>
      <TouchableOpacity
        style={aidapplicationstyle.SelectButton}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={aidapplicationstyle.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={aidapplicationstyle.UploadButton}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={aidapplicationstyle.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
      </View>
      <View style={aidapplicationstyle.section}>
        <Checkbox
          style={aidapplicationstyle.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#167D7F" : undefined}/>
        <Text style={aidapplicationstyle.paragraph}>I agree to the terms and conditions as set out by the user agreements</Text>
      </View>

      <TouchableOpacity
        style={aidapplicationstyle.submitButton}
        onPress={()=> AidApplication()}>
        <Text style={aidapplicationstyle.submitText}>Submit</Text>
      </TouchableOpacity>
    
    </View>
    </ScrollView>
    </View>

  )
}