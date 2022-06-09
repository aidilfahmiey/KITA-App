import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Entypo } from '@expo/vector-icons'; 
import DocumentPicker from 'react-native-document-picker';

export default function Application() {

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

    <View style={styles.container}>
    <ScrollView>
    <View style={styles.containerMain}>
            
        <TextInput
        style={styles.inputText}
        placeholder= 'Name' placeholderTextColor="grey"
        value={name}
        onChangeText= {(name)=> setName(name)}
        />

        <TextInput
        style={styles.inputText}
        placeholder= 'I/C Number' placeholderTextColor="grey"
        onChangeText= {(nric)=> setNric(nric)}
        />
        
        <TextInput
        style={styles.inputText}
        placeholder= 'Address' placeholderTextColor="grey"
        onChangeText= {(address)=> setAddress(address)}
        />
    {singleFile != null ? (
     <Text style={styles.textStyle}>
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

      <View style={styles.Upload}>
          <View style={styles.UploadIcon}>
          <Entypo name="upload" size={24} color="black" />
          </View>
          <Text style={styles.documents}>Upload required documents</Text>
      </View>

      <View style={styles.UploadSelectButton}>
      <TouchableOpacity
        style={styles.SelectButton}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.UploadButton}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}/>
        <Text style={styles.paragraph}>I agree to the terms and conditions as set out by the user agreements</Text>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={()=> AidApplication()}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    
    </View>
    </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:100,
  },
  containerMain: {
    padding: 35,
    flex: 1,
  },
  documents:{
    fontSize: 14,
    marginLeft: 5,
    paddingVertical: 5,
  }, 
  inputText: {
    borderColor: "#48C9B0",
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    width:"90%",
    alignSelf:"center",
    borderRadius: 15,
  },
  Upload:{
    flexDirection:'row',
    alignSelf:"center",
    margin:10,
  },
  UploadIcon: {
    width: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:20,
    width:"90%",
    alignSelf:"center"
  },
  paragraph: {
    fontSize: 12,
    margin:5,
  },
  checkbox: {
    margin: 8,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  UploadSelectButton:{
    flexDirection: 'row',
    alignSelf:"center",
    padding: 10,
  },
  SelectButton: {
    backgroundColor: '#307ecc',
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    width: 100,
  },
  UploadButton: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    width: 100,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: "#48C9B0",
    width: '30%',
    height: '13%',
    borderRadius: 10,
    marginTop:10,
    borderRadius: 15,
  },
  submitText: {
    color: "#FFFFFF",
    fontWeight: 'bold',
    fontSize: 18,
  },
});