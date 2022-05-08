import React from 'react'

import { useTheme } from '../../hooks/useTheme'
import { View, Text, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'
export const PageHeader = ({ title, color, Icon }) => {
  return (
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
        {title}
      </Text>
    </View>
  )
}
export const Page = ({ children, style = {} }) => {
  const { black } = useTheme()

  return (
    <ScrollView
      style={{
        borderRadius: 10,
        borderWidth: 5,
        borderColor: black,
        flex: 1,
        ...style,
      }}
    >
      {children}
    </ScrollView>
  )
}
