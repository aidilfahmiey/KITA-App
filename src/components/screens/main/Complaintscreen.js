import React, {useState} from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import Checkbox from 'expo-checkbox';
import Firebase from '../../../database/firebase';
import { complaintstyle } from '../../../config/Complaintstyle';
import AppLoader from '../AppLoader';
import { useNavigation } from '@react-navigation/native';


function Complaintscreen() {

  const [complaint, setComplaint] = useState('');
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  
  const AddComplaint= ()=> {

    setShow(false);

    if(
      complaint == ''
    ){
    Alert.alert('Write your complaint on above section!');
    }
    else {

      Firebase
      .firestore()
      .collection('complaint')
      .add({
        UserComplaint: complaint,
        uid: Firebase.auth().currentUser.uid,
      })
      .then((res) => {
        navigation.navigate('Home');
        console.log('Thank you! Your Complaint recorded successfully!')
        
      })  
    }
    
  }

  const twoOptionsAlertFunction = () => {
    Alert.alert(
      'Submit this complaint?',
      'The complaint will be send to the authority and action will be taken.',
      [
        { text: 'Yes', onPress: () => AddComplaint()},
        { text: 'No', onPress: () =>navigation.navigate('Home')},
      ],
      { cancelable: false }
    );
  }

  const [isChecked, setChecked] = useState(false);

  return(
    <>
    <View style={complaintstyle.container}>
    <ScrollView>
    <View style={complaintstyle.containerMain}>
      
        <TextInput
        style={complaintstyle.inputText}
        placeholder= 'Write your complaint here' placeholderTextColor="grey"
        onChangeText= {(complaint)=> setComplaint(complaint)}
        multiline={true}
        numberOfLines={4}
        />

      <View style={complaintstyle.section}>
        <Checkbox
          style={complaintstyle.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#167D7F" : undefined}/>
        <Text style={complaintstyle.paragraph}>I agree to the terms and conditions as set out by the user agreements</Text>
      </View>

      <TouchableOpacity
        style={complaintstyle.submitButton}
        onPress={()=> twoOptionsAlertFunction()}>
        <Text style={complaintstyle.submitText}>Submit</Text>
      </TouchableOpacity>
    
    </View>
    </ScrollView>
    </View>
    
</>
  )
  }
  export default Complaintscreen;