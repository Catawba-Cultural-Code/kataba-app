import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { LanguageIcon } from '../../Components/Icons'
import { Page } from '../../Components/Page'
import useContent from '../../hooks/useContent'
import { COLORS, useTheme } from '../../hooks/useTheme'
import Dictionary from './Dictionary'
const Language = () => {
  const { yellow } = useTheme()
  const content = useContent()
  const [dict, setDict] = useState([])
  useEffect(() => {
    const arr = content
      .filter((o) => o.sys.contentType.sys.id == 'languageEntry')
      .sort((a, b) => a.fields.entry.localeCompare(b.fields.entry))
    console.log(arr)
    setDict(arr)
  }, [content])
  return (
    <Page title='Language' Icon={LanguageIcon} color={yellow}>
      <Dictionary dict={dict} />
    </Page>
  )
}

export default Language
