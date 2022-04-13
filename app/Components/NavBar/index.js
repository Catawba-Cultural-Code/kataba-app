import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { View, Text, Pressable } from 'react-native'

import { useTheme } from '../../Theme'

import {
  CommunityIcon,
  LanguageIcon,
  ManuIcon,
  StoryIcon,
  TechnologyIcon,
  WellnessIcon,
} from '../Icons'

const NavButton = ({ children, name = 'Home', color }) => {
  const { navigate } = useNavigation()

  const { white } = useTheme()

  return (
    <Pressable
      onPress={() => navigate(name)}
      style={{
        flex: 1,
        alignItems: 'center',
        height: 50,
        backgroundColor: white,
      }}
    >
      <View style={{ position: 'absolute' }}>{children}</View>
    </Pressable>
  )
}
const NavBar = () => {
  const { red, green, teal, blue, orange, yellow } = useTheme()
  return (
    <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 30 }}>
      <NavButton name='Wellness' color={red}>
        <WellnessIcon />
      </NavButton>
      <NavButton name='Language' color={yellow}>
        <LanguageIcon />
      </NavButton>
      <NavButton name='Technology' color={green}>
        <TechnologyIcon size={30} />
      </NavButton>
      <NavButton name='Manu' color={teal}>
        <ManuIcon />
      </NavButton>

      <NavButton name='Community' color={orange}>
        <CommunityIcon />
      </NavButton>
      <NavButton name='Story' color={blue}>
        <StoryIcon size={30} />
      </NavButton>
    </View>
  )
}

export default NavBar
