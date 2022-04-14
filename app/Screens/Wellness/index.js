import React from 'react'
import { View, Text } from 'react-native'
import { WellnessIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import { useTheme } from '../../hooks/useTheme'
const Wellness = () => {
  const { red } = useTheme()
  return (
    <Page color={red} title='Well-Being' Icon={WellnessIcon}>
      <Text>Well-being stuffffff f f f f f</Text>
    </Page>
  )
}

export default Wellness
