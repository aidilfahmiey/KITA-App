import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Pressable, ScrollView } from 'react-native'
import Firebase from '../../../database/firebase';
import styles from '../../../config/style';
import DatePicker from 'react-native-datepicker';
import color from '../../../config/color';

export default function CitizenRegister(props) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [state, setState] = useState('');



    const citizenSignUp= ()=> {
        
        if (
            name == '' ||
            date == '' ||
            email == '' ||
            password == '' ||
            address == '' ||
            postcode == '' ||
            state == '') {
                Alert.alert('Enter details to sign in!')
            return;
        }
        if (password.length < 6) {
            Alert.alert('Password must be at least 6 characters')
            return;
        }

        Firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result)=> {
            Firebase
            .firestore()
            .collection("users")
            .doc(Firebase
                .auth()
                .currentUser.uid)
            .set({
                name,
                date,
                email,
                address,
                postcode,
                state,
            });
            console.log(result)
        })
        .catch(() => {
            setIsValid({ bool: true, boolSnack: true, message: "Something went wrong" })
        }).catch(() => {
            setIsValid({ bool: true, boolSnack: true, message: "Something went wrong" })
        })
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
                        placeholder= 'Name'
                        value={name}
                        onChangeText= {(name)=> setName(name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').replace(/[^a-z0-9]/gi, ''))}
                    />
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
                    
                    <DatePicker
                        style={styles.datePickerStyle}
                        
                        date={date} // Initial date from state
                        mode="date" // The enum of date, datetime and time
                        placeholder="Date of Birth"
                        format="DD-MM-YYYY"
                        minDate="01-01-1800"
                        maxDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                width:0,
                                height:0,
                            },
                            dateInput: {
                                borderColor: color.backgroundBotTurquoise,
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderRadius: 10,
                                padding: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            },
                        }}
                    onDateChange={(date) => {setDate(date);}}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder= 'Address'
                        onChangeText= {(address)=> setAddress(address)}
                    />
                    <View style={styles.bottomTextInput}>

                    <TextInput
                        style={styles.inputTextBottom}
                        placeholder= 'Postcode'
                        onChangeText= {(postcode)=> setPostcode(postcode)}
                    />
                    <TextInput
                        style={styles.inputTextBottom}
                        placeholder= 'State'
                        onChangeText= {(state)=> setState(state)}
                    />

                    </View>
                    <TouchableOpacity
                        style={styles.AuthButtonRegister}
                        onPress={()=> citizenSignUp()}>
                        <Text style={styles.AuthText}>Sign Up</Text>
                    </TouchableOpacity>

                    <Text
                        style={styles.AskAccount}
                        onPress={() => props.navigation.navigate('CitizenLogin')}>
                        Already have an account? Click here to Sign In
                    </Text>

                    <Text style={styles.Agreement}>
                        By signing up you are in agreement of Terms and condition
                    </Text>
                                        
                     
                </View>
             </ScrollView>
            </View>
        )
        }
