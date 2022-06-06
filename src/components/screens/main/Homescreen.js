import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import PostCard from '../PostCard';
import { feedstyles } from '../../../config/FeedStyle';


const Posts = [
  {
    id: '1',
    userName: 'David Beckham',
    userImg: require("../../../../assets/beckham.jpg"),
    postTime: '4 mins ago',
    postText:
      'Hey there, this is my test for a post of app.',
    postImg: require("../../../../assets/beckham.jpg"),
  },
  {
    id: '2',
    userName: 'Johny Depp',
    userImg: require("../../../../assets/JD.jpg"),
    postTime: '2 hours ago',
    postText:
      'Hey there, this is my test for a post of my app.',
    postImg: 'none',
  },
  {
    id: '3',
    userName: 'Neymar',
    userImg: require("../../../../assets/neymar.jpg"),
    postTime: '1 hours ago',
    postText:
      'Hey there, this is my test for a post of my app.',
    postImg: require("../../../../assets/neymar.jpg"),
  },
];

const  Homescreen = ({navigation}) => {
  return (
    <View style={feedstyles.feed}>
    <View style={feedstyles.cardWH}>
              <View style={feedstyles.UserInfoWH}>
                
                <Image
                  style={feedstyles.UserImgWH}
                  source={require("../../../../assets/beckham.jpg")}/>
                
                <TouchableOpacity
                    style={feedstyles.WH}
                    onPress={() => navigation.navigate("Create Post")}>
                    <Text style={feedstyles.textWH}>What's happening?</Text>
                  </TouchableOpacity>
          
              </View>
            </View>
      <FlatList
        data = {Posts}
        renderItem = {({item}) => <PostCard item = {item}/>}
        keyExtractor = {item =>item.id}
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
};

export default Homescreen;
