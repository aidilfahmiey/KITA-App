import * as React from 'react';
import { View, FlatList} from 'react-native';
import AidCard from '../../screens/main/AidCard';
import { aidscreenstyle } from '../../../config/AidScreenStyle';

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
    <View style={aidscreenstyle.container}>
      
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
