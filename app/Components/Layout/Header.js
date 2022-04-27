import { View, Text, Pressable, Platform } from 'react-native'
import { COLORS } from '../../hooks/useTheme'
import { QRIcon } from '../Icons'

const Header = ({ handleHome, handleQR }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <Pressable onPress={handleHome} style={{ paddingBottom: 10 }}>
        <Text style={{ textAlign: 'left', fontFamily: 'Lato', fontSize: 30 }}>
          kataba.app
        </Text>
      </Pressable>
      {Platform.OS == 'web' ? null : (
        <Pressable
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            backgroundColor: COLORS.red,
            alignItems: 'center',
            borderRadius: 50,
          }}
          onPress={handleQR}
        >
          <QRIcon />
        </Pressable>
      )}
    </View>
  )
}

export default Header
