import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'

const Header = ({ handlePress }) => {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable onPress={handlePress} style={{ paddingBottom: 10 }}>
        <Text style={{ textAlign: 'left', fontFamily: 'Lato', fontSize: 30 }}>
          kataba.app
        </Text>
      </Pressable>
    </View>
  )
}

export default Header
