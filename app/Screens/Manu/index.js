import React from 'react'
import { View, Text } from 'react-native'
import { ManuIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import { useTheme } from '../../hooks/useTheme'
const Manu = () => {
  const { teal } = useTheme()
  return (
    <Page color={teal} title='Manu' Icon={ManuIcon}>
      <Text>earth stuff!</Text>
    </Page>
  )
}

export default Manu
