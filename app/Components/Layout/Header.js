import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'

const Header = ({ handlePress }) => {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable onPress={handlePress} style={{ paddingBottom: 5 }}>
        <Text style={{ textAlign: 'right', fontFamily: 'Lato', fontSize: 20 }}>
          kataba.app
        </Text>
      </Pressable>
    </View>
  )
}

export default Header
