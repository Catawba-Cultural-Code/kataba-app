import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { LanguageIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import useContent from '../../hooks/useContent'
import { COLORS, useTheme } from '../../hooks/useTheme'
import Dictionary from './Dictionary'
import { LanguageProvider } from './useLanguage'
const Stack = createStackNavigator()
const Language = () => {
  return (
    <LanguageProvider>
      <Page title='Language' Icon={LanguageIcon} color={COLORS.yellow}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Dictionary' component={Dictionary} />
        </Stack.Navigator>
        {/* <Dictionary dict={dict} /> */}
      </Page>
    </LanguageProvider>
  )
}

export default Language
