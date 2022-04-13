import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'

const Header = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ paddingBottom: 5 }}
      >
        <Text style={{ textAlign: 'right', fontFamily: 'Lato', fontSize: 20 }}>
          kataba.app
        </Text>
      </Pressable>
    </View>
  )
}

export default Header
