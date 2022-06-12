import React, {useState} from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, Alert} from 'react-native';
import Checkbox from 'expo-checkbox';
import Firebase from '../../../database/firebase';
import { suggestionstyle } from '../../../config/Suggestionstyle';

export default function Suggestionscreen({navigation}) {

  const [suggestion, setSuggestion] = useState('');
  
  const AddSuggestion= ()=> {
    if(
      suggestion == ''
    ){
    alert('Write your suggestions on above section!');
    }
    else {
        Firebase
        .firestore()
        .collection('Suggestion')
        .doc(Firebase.auth().currentUser.uid)
        .set({suggestion})
        .then((res) => {
          console.log(res)
          navigation.navigate('Home')
          console.log('Thank you! Your suggestion recorded successfully!')})
      }};

      const twoOptionsAlertFunction = () => {
        Alert.alert(
          'Submit this suggestion?',
          'The idea will be send to the authority and action will be taken.',
          [
            { text: 'Yes', onPress: () => AddSuggestion()},
            { text: 'No', onPress: () =>navigation.navigate('Home')},
          ],
          { cancelable: false }
        );
      }
  

  const [isChecked, setChecked] = useState(false);

  return(

    <View style={suggestionstyle.container}>
      <ScrollView
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
      <View style={suggestionstyle.containerMain}>
        
          <TextInput
          style={suggestionstyle.inputText}
          placeholder= 'Write your suggestion here' placeholderTextColor="grey"
          onChangeText= {(suggestion)=> setSuggestion(suggestion)}
          multiline={true}
          numberOfLines={4}
          />

        <View style={suggestionstyle.section}>
          <Checkbox
            style={suggestionstyle.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#167D7F" : undefined}/>
          <Text style={suggestionstyle.paragraph}>I agree to the terms and conditions as set out by the user agreements</Text>
        </View>

        <TouchableOpacity
          style={suggestionstyle.submitButton}
          onPress={()=> twoOptionsAlertFunction()}>
          <Text style={suggestionstyle.submitText}>Submit</Text>
        </TouchableOpacity>
      
      </View>
      </ScrollView>
    </View>

  )
}
