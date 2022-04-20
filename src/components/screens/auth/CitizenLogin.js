import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import Firebase from '../../../database/firebase';
import styles from '../../../config/style';

export default function CitizenLogin(props) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const citizenLogin = () => {
        if(email === '' && password === '') {
          Alert.alert('Enter details to sign in!')
        } else {
            setIsValid({
            isLoading: true,
          })
          Firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
          
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }

        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerMain}>

                <View style={styles.containerImageAuth}>
                    <Image
                        style={styles.providerImageAuth}
                        source={require("../../../../assets/logo1.png")}/>
                </View>
                    
                    <TextInput
                        style={styles.inputText}
                        placeholder= 'Email'
                        onChangeText= {(email)=> setEmail(email)}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder= 'Password'
                        onChangeText= {(password)=> setPassword(password)}
                        secureTextEntry= {true}
                    />
                
                    <TouchableOpacity
                        style={styles.AuthButtonLogin}
                        onPress={() => citizenLogin()}>
                        <Text style={styles.AuthText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View/>

                <Text 
                    style={styles.AskAccountLogin}
                    onPress={() => props.navigation.navigate('CitizenRegister')}>
                    Don't have an account? Click here to Sign Up
                </Text>    
                </ScrollView>
            </View>
        )
    
}