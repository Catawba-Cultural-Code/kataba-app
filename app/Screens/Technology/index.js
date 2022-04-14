import React from 'react'
import { View, Text } from 'react-native'
import { TechnologyIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import { useTheme } from '../../hooks/useTheme'
const Technology = () => {
  const { green } = useTheme()
  return (
    <Page color={green} title='Technology & Art' Icon={TechnologyIcon}>
      <Text>Let's learn about tech and art!!!</Text>
    </Page>
  )
}

export default Technology
