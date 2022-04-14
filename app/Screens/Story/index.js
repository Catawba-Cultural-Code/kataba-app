import React from 'react'
import { View, Text } from 'react-native'
import { StoryIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import { useTheme } from '../../hooks/useTheme'
const Story = () => {
  const { blue } = useTheme()
  return (
    <Page color={blue} Icon={StoryIcon} title='Hi/Story'>
      <Text>Story stuffffffff</Text>
    </Page>
  )
}

export default Story
