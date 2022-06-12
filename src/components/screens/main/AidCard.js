import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { aidfeedstyles } from '../../../config/AidFeedStyle';
import {useNavigation} from '@react-navigation/native';

function AidCard({item}){

  const navigation = useNavigation();
    return (
     
        <View style={aidfeedstyles.feed}>
            <View style={aidfeedstyles.card}>
              <View style={aidfeedstyles.UserInfo}>
                
               
                <View style={aidfeedstyles.UserInfoText}>
                  <Text style={aidfeedstyles.UserName}>{item.aidName}</Text>

                  
                </View>
                

              </View>
              <TouchableOpacity
                    onPress={() => navigation.navigate('Apply Aid')}
                    style={aidfeedstyles.applyButton}>
                    <Text style={aidfeedstyles.buttonText}>Apply</Text>
                  </TouchableOpacity>
            </View>
        </View>
      )
};
export default AidCard;