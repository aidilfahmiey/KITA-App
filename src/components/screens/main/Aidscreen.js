import * as React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import AidCard from '../../screens/main/AidCard';

const Data = [

  {
    id: 1,
    aidName: "Bantuan Keluarga Malaysia"
  },
  {
    id: 2,
    aidName: "Biasiswa Negeri"
  },
  {
    id: 3,
    aidName: "MySalam"
  },
  {
    id: 4,
    aidName: "Program Kasih Suri"
  },
  {
    id: 5,
    aidName: "Peranti Siswa Keluarga Malaysia"
  },
  {
    id: 6,
    aidName: "E-Start"
  }   

]

export default function Aidscreen({item,navigation}) {

  return (
    <View style={styles.container}>
      
      <FlatList
        data = {Data}
        renderItem = {({item}) => <AidCard item = {item}/>}
        keyExtractor = {item =>item.id}
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:100
  },
  listItem:{
    margin:5,
    padding:10,
    backgroundColor:"#167D7F",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:8,
  },
  buttonStyle: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  applyButton: {
    backgroundColor: "#F9E79F",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    padding: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#17202A",
  },
});
