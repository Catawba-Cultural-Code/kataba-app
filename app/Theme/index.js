import { useFonts } from 'expo-font'
import { createContext, useContext } from 'react'

const ThemeContext = createContext()
const COLORS = {
  black: '#000',
  white: '#fff',
  navy: '#051940',
  teal: '#41B2A2',
  yellow: '#FBC10B',
  blue: '#0BBCEE',
  orange: '#F25A38',
  red: '#E20707',
  green: '#29D529',
}
export const ThemeProvider = ({ children }) => {
  const [loaded] = useFonts({
    'Noto Sans': require('../assets/fonts/Noto_Sans/NotoSans-Regular.ttf'),
    'DM Serif': require('../assets/fonts/DM_Serif_Text/DMSerifText-Regular.ttf'),
    Lato: require('../assets/fonts/Lato/Lato-Bold.ttf'),
  })
  if (!loaded) return null
  return (
    <ThemeContext.Provider value={COLORS}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
