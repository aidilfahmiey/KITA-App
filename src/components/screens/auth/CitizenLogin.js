import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import Firebase from '../../../database/firebase';
import styles from '../../../config/style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AppLoader from '../AppLoader';

export default function CitizenLogin(props) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const citizenLogin = () => {

        setShow(false);
        
        
          Firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
          
          })
          .catch(error => {
            switch(error.code) {
                case 'auth/invalid-email': 
                    Alert.alert('Invalid email or password!',
                    'Please check every character entered and make sure no space.')
                    setShow(false);
                case 'auth/invalid-password':
                    Alert.alert('Invalid email or password!',
                    'Please check every character entered and make sure no space.')
                    setShow(false);
                break;
            }
        })
        
        setShow(true);
      }
      
        return (
            <>
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerMain}>

                <View style={styles.containerImageAuth}>
                    <Image
                        style={styles.providerImageAuth}
                        source={require("../../../../assets/logo1.png")}/>
                </View>
                
                <View style={styles.LoginEmail}>

                    <View style={styles.LoginEmailIcon}>
                    <AntDesign name="user" size={20} color="black" />
                    </View>
                    
                    <TextInput
                        style={styles.inputText}
                        placeholder= 'Email'
                        onChangeText= {(email)=> setEmail(email)}
                    />
                </View>
                
                <View style={styles.LoginPassword}>

                    <View style={styles.LoginPasswordIcon}>
                        <MaterialIcons name="lock-outline" size={20} color="black" />
                    </View>
                    <TextInput
                        style={styles.inputText}
                        placeholder= 'Password'
                        onChangeText= {(password)=> setPassword(password)}
                        secureTextEntry= {true}
                    />
                </View>
                    
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
            {show ? <AppLoader/>: null }
            </>
        )
    
}