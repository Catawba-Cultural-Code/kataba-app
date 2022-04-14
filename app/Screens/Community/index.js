import React from 'react'
import { View, Text } from 'react-native'
import { CommunityIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import { useTheme } from '../../hooks/useTheme'
const Community = () => {
  const { orange } = useTheme()
  return (
    <Page title='Community' color={orange} Icon={CommunityIcon}>
      <Text>This is where stuff related to citizenship and such will be</Text>
    </Page>
  )
}

export default Community
