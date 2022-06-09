import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { feedstyles } from '../../../config/FeedStyle';

const AidCard = ({item}) => {
    
    return (
    
        <View style={feedstyles.feed}>
            <View style={feedstyles.card}>
              <View style={feedstyles.UserInfo}>
                
               
                <View style={feedstyles.UserInfoText}>
                  <Text style={feedstyles.UserName}>{item.aidName}</Text>
                </View>
              </View>
              
            <View style={feedstyles.Divider}></View>
              
            </View>
        </View>
      )
};
export default AidCard;