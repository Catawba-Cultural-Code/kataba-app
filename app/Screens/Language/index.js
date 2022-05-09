import React, { useEffect } from 'react'
import { Page, PageHeader } from '../../Components/Page'
import Dictionary from './Dictionary'

import { LanguageProvider } from './useLanguage'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Practice from './Practice'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()

const Language = () => {
  const navigation = useNavigation()

  return (
    <Page>
      <LanguageProvider>
        <Text>HELLO</Text>

        <Stack.Navigator
          initialRouteName='Dictionary'
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name='Dictionary' component={Dictionary} />
          <Stack.Screen name='Practice' component={Practice} />
        </Stack.Navigator>
      </LanguageProvider>
    </Page>
  )
}

export default Language
