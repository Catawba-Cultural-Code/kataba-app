import React, { useEffect, useState } from 'react'

import { LanguageIcon } from '../../Components/Icons'
import { Page, PageHeader } from '../../Components/Page'
import useContent from '../../hooks/useContent'
import { useTheme } from '../../hooks/useTheme'
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
    <Page>
      <PageHeader
        title='Language'
        Icon={LanguageIcon}
        color={yellow}
      ></PageHeader>
      <Dictionary dict={dict} />
    </Page>
  )
}

export default Language
