import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {
  View,
  Text,
  Pressable,
  PLatform,
  Platform,
  Dimensions,
  useWindowDimensions,
} from 'react-native'
import components from '../../components'

import { useTheme } from '../../hooks/useTheme'

import Header from './Header'

const NavButton = ({ children, name = 'Home', color, handlePress }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={{
        flex: 1,
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: color,
        borderRadius: 50,
        justifyContent: 'center',
      }}
    >
      <View style={{ position: 'absolute' }}>{children}</View>
    </Pressable>
  )
}
const Layout = ({ children }) => {
  const { red, green, teal, blue, orange, yellow, white } = useTheme()
  const { navigate } = useNavigation()
  const [current, setCurrent] = React.useState('Home')
  const windowWidth = useWindowDimensions().width
  const [width, setWidth] = React.useState('100%')
  const handlePress = (newName) => {
    setCurrent(newName)
    navigate(newName)
  }
  React.useEffect(() => {
    if (Platform.OS == 'web') {
      if (windowWidth > 650) {
        setWidth('50%')
        return
      }
      setWidth('100%')
    }
  }, [windowWidth])

  return (
    <View
      style={{
        flex: 1,
        width,
        marginHorizontal: 'auto',
      }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'web' ? 10 : 45,
          paddingHorizontal: 10,
          paddingBottom: Platform.OS == 'ios' ? 20 : 10,
        }}
      >
        <Header handlePress={() => handlePress('Home')} />
        {children}
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 10,

            justifyContent: 'space-around',
          }}
        >
          {components.map(({ name, color, Icon }) => {
            return (
              <NavButton
                key={name}
                name={name}
                color={current == name ? color : white}
                handlePress={() => handlePress(name)}
              >
                <Icon />
              </NavButton>
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default Layout
