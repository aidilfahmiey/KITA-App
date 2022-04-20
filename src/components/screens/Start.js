import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from '../../config/style';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Start extends Component{
    render(){
    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>

                <View style={styles.containerImage}>
                    <Image
                        style={styles.providerImage}
                        source={require("../../../assets/logo1.png")}/>
                </View>

                <TouchableOpacity
                    style={styles.providerButton}
                    onPress={() => this.props.navigation.navigate('Citizen')}>
                    <Feather name="user" size={24} color="black" />
                    <Text style={styles.providerButtonText}>Citizen</Text>
                    <View/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.providerButton}
                    onPress={() => this.props.navigation.navigate('Authorities')}>
                    <MaterialCommunityIcons name="account-star-outline" size={24} color="black" />
                    <Text style={styles.providerButtonText}>Authorities</Text>
                    <View/>
                </TouchableOpacity>
            </View>
        </View>
    )   
}
}
