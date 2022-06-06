import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { feedstyles } from '../../config/FeedStyle';

const PostCard = ({item}) => {
    
    return (
    
        <View style={feedstyles.feed}>
            <View style={feedstyles.card}>
              <View style={feedstyles.UserInfo}>
                
                <Image
                  style={feedstyles.UserImg}
                  source={item.userImg}/>
                <View style={feedstyles.UserInfoText}>
                  <Text style={feedstyles.UserName}>{item.userName}</Text>
                  <Text style={feedstyles.PostTime}>{item.postTime}</Text>
                </View>
              </View>
              <Text style={feedstyles.PostText}>{item.postText}</Text>
              
              {item.postImg != 'none' ? (
                <Image
                style={feedstyles.PostImg}
                source = {item.postImg}/>
              ) : ( <View style={feedstyles.Divider}></View>)}
              
            </View>
        </View>
      )
};
export default PostCard;