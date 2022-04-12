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
}
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={COLORS}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
