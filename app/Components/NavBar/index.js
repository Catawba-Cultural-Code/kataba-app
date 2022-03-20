import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

import {
  CommunityIcon,
  LanguageIcon,
  ManuIcon,
  StoryIcon,
  TechnologyIcon,
  WellnessIcon,
} from '../Icons'
const NavButton = ({ children, name = 'Home' }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => navigation.navigate(name)}
      style={{
        flex: 1,
        alignItems: 'center',
        height: 50,
      }}
    >
      <View style={{ position: 'absolute' }}>{children}</View>
    </Pressable>
  )
}
const NavBar = () => {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 30 }}>
      <NavButton name='Wellness'>
        <WellnessIcon />
      </NavButton>
      <NavButton name='Language'>
        <LanguageIcon />
      </NavButton>
      <NavButton name='Technology'>
        <TechnologyIcon size={30} />
      </NavButton>
      <NavButton name='Manu'>
        <ManuIcon />
      </NavButton>

      <NavButton name='Community'>
        <CommunityIcon />
      </NavButton>
      <NavButton name='Story'>
        <StoryIcon size={30} />
      </NavButton>
    </View>
  )
}

export default NavBar
