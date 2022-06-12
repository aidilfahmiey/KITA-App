import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PostCard from '../PostCard';
import { feedstyles } from '../../../config/FeedStyle';
import {useNavigation} from '@react-navigation/native';
import Firebase from '../../../database/firebase';
import color from '../../../config/color';


const  Homescreen = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {

      Firebase
      .firestore()
      .collection('posts')
      .get()
      .then((snapshot) => {
        const arr = [];
        snapshot.forEach((doc) => {
          //console.log(doc.data())
          arr.push({id: doc.id, ...doc.data()})
        })
        console.log(arr);
        setPosts(arr)
        console.log('Fetch post gug')
      }
      )
    })();
  }, []);
  
  const navigation = useNavigation();

  const { currentUser, users} = props;


  return (
    <View style={feedstyles.feed}>
    <View style={feedstyles.cardWH}>
              <View style={feedstyles.UserInfoWH}>

                    <ImageBackground
                        source={{uri:currentUser.profileImage}}
                        style={feedstyles.UserImgWH}
                        imageStyle={{borderRadius: 40}}
                    > 
                        <View style={{
                            flex: 1,
                            backgroundColor: color.darkgrey,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            opacity:0.1
                        }}>
                       
                            
                        </View>
                    </ImageBackground>
                       
                
                <TouchableOpacity
                    style={feedstyles.WH}
                    onPress={() => navigation.navigate("Create Post")}>
                    <Text style={feedstyles.textWH}>What's happening?</Text>
                  </TouchableOpacity>
          
              </View>
            </View>
      <FlatList
        data = {posts}
        renderItem = {({item}) => <PostCard item = {item}/>}
        keyExtractor = {item =>item.id}
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
};


const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  users: store.userState.users
})
export default connect(mapStateToProps, null)(Homescreen);
 