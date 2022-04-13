import React from 'react'
import { View, Text } from 'react-native'
import { LanguageIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import { useTheme } from '../../Theme'
const Language = () => {
  const { yellow } = useTheme()
  return (
    <Page title='Language' Icon={LanguageIcon} color={yellow}>
      <Text>Lorem ipsum dolor sicut</Text>
    </Page>
  )
}

export default Language
