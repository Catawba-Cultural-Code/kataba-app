import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { LanguageIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import useContent from '../../hooks/useContent'
import { COLORS, useTheme } from '../../hooks/useTheme'
import Dictionary from './Dictionary'
const Language = () => {
  const { yellow } = useTheme()
  const [showSearch, setShowSearch] = useState(false)
  return (
    <Page title='Language' Icon={LanguageIcon} color={yellow}>
      {showSearch ? <Dictionary /> : null}
    </Page>
  )
}

export default Language
