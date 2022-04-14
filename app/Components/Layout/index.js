import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
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
  const handlePress = (newName) => {
    setCurrent(newName)
    navigate(newName)
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingTop: 50,
          paddingHorizontal: 10,
        }}
      >
        <Header handlePress={() => handlePress('Home')} />
        {children}
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 30,
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
