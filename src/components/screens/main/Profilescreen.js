import * as React from 'react';
import { View, Text} from 'react-native';

export default function Profilescreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
            onPress={()=> navigation.navigate('Home')}>
            ni profile screen
        </Text>

    </View>
  )
}
