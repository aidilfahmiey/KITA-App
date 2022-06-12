import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { feedstyles } from '../../config/FeedStyle';

const PostCard = ({item}) => {
    const creation = new Date(item.creation.seconds*1000);
    
    return (
     
        <View style={feedstyles.feed}>
            <View style={feedstyles.card}>
              <View style={feedstyles.UserInfo}>
                
                <Image
                  style={feedstyles.UserImg}
                  source={{uri:item.Profile}}/>
                <View style={feedstyles.UserInfoText}>
                  <Text style={feedstyles.UserName}>{item.Name}</Text>
                  <Text style={feedstyles.PostTime}>{`${creation.getDate()}/${creation.getMonth()+1}/${creation.getFullYear()}`}</Text>
                </View>
              </View>
              <Text style={feedstyles.PostText}>{item.UserText}</Text>
              
              {item.postImg != 'none' ? (
                <Image
                style={feedstyles.PostImg}
                source = {{uri:item.downloadURL}}/>
              ) : ( <View style={feedstyles.Divider}></View>)}
              
            </View>
        </View>
      ) 
};
export default PostCard;