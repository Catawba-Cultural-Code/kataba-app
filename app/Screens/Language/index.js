import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Pressable, TextInput } from 'react-native'
import { CloseIcon, LanguageIcon, SearchIcon } from '../../Components/Icons'
import { Page, PageHeader } from '../../Components/Page'
import useContent from '../../hooks/useContent'
import { COLORS, useTheme } from '../../hooks/useTheme'
import Dictionary from './Dictionary'
const Language = () => {
  const { yellow } = useTheme()
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <Page>
      <PageHeader title={'Language'} Icon={LanguageIcon} color={yellow}>
        <View
          style={{
            justifyContent: 'center',

            alignItems: 'center',
          }}
        >
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 25,
              width: showSearch ? '50%' : 'auto',
              backgroundColor: showSearch ? COLORS.white : 'transparent',

              height: 25,
              overflow: 'hidden',
              flexDirection: 'row',
              justifyContent: showSearch ? 'flex-end' : 'center',
            }}
          >
            {showSearch ? (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',

                  paddingLeft: 10,
                  alignItems: 'center',
                }}
              >
                <TextInput
                  autoFocus={true}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Pressable
                  style={{
                    height: '100%',
                    justifyContent: 'center',
                    marginRight: 5,
                  }}
                >
                  <CloseIcon size={10} />
                </Pressable>
              </View>
            ) : null}
            <Pressable
              onPress={() => setShowSearch(true)}
              style={
                showSearch
                  ? {
                      width: 35,
                      height: '100%',
                      backgroundColor: COLORS.blue,

                      alignItems: 'center',
                      justifyContent: 'center',
                    }
                  : {
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: 25,
                      paddingRight: 25,
                    }
              }
            >
              <SearchIcon size={15} />
            </Pressable>
          </View>
        </View>
      </PageHeader>
      {showSearch ? <Dictionary /> : null}
    </Page>
  )
}

export default Language
