import React from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { PageHeader } from '../../../Components/Page'
import { COLORS } from '../../../hooks/useTheme'
import { LanguageIcon } from '../../../Components/Icons'
import { useTheme } from '../../../hooks/useTheme'
import useLanguage from '../useLanguage'
const Dictionary = () => {
  const { yellow } = useTheme()
  const { dictionary } = useLanguage()
  return (
    <>
      <PageHeader title='Language' Icon={LanguageIcon} color={yellow}>
        <Text>Hello</Text>
      </PageHeader>
      {dictionary.map((o) => {
        const { entry, translations, ipa, images } = o.fields
        return (
          <View
            key={entry}
            style={{
              shadowColor: COLORS.black,
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              margin: 10,
              borderRadius: 5,
              flexDirection: 'row',
              overflow: 'hidden',
            }}
          >
            <View
              style={{ backgroundColor: COLORS.blue, minWidth: 75, padding: 5 }}
            >
              {images?.length > 0 ? (
                <ImageBackground
                  style={{ width: '100%', height: '100%', flex: 1 }}
                  source={{ uri: images[0].fields.file.url.split('//')[1] }}
                />
              ) : null}
            </View>
            <View style={{ flex: 1, paddingLeft: 10, paddingVertical: 10 }}>
              <Text style={{ fontSize: 25, fontFamily: 'Noto Sans' }}>
                {entry}
              </Text>
              <Text style={{ opacity: 0.5 }}>{ipa}</Text>
              <Text>
                {translations?.reduce((acc, curr, i) => {
                  if (i == 0) return curr
                  return `${acc}, ${curr}`
                }, '') || ''}
              </Text>
            </View>
          </View>
        )
      })}
    </>
  )
}

export default Dictionary
