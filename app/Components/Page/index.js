import React from 'react'

import { useTheme } from '../../hooks/useTheme'
import { View, Text, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'
export const PageHeader = ({ title, Icon, color, children }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        paddingTop: 50,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 20,
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
      <View style={{ marginBottom: 20 }}>{children}</View>
    </View>
  )
}
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
      {children}
    </ScrollView>
  )
}
