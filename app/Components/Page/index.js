import React from 'react'

import { useTheme } from '../../Theme'
import { View, Text, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'
export const Page = ({ Icon, color, title, children }) => {
  const { orange, black } = useTheme()
  const { state } = useNavigation()

  return (
    <ScrollView
      style={{
        borderRadius: 10,
        borderWidth: 5,
        borderColor: black,
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: color,
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Icon size={30} />
        <Text
          style={{
            textAlign: 'center',
            marginLeft: 10,
            fontSize: 25,
            fontFamily: 'Lato',
          }}
        >
          {title.toUpperCase()}
        </Text>
      </View>
      {children}
    </ScrollView>
  )
}
