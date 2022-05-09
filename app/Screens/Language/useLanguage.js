import { useContext, useState, createContext, useEffect } from 'react'
import useContent from '../../hooks/useContent'
const LanguageContext = createContext()
const useLanguage = () => {
  return useContext(LanguageContext)
}
export default useLanguage

export const LanguageProvider = ({ children }) => {
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
    <LanguageContext.Provider value={{ dictionary: dict }}>
      {children}
    </LanguageContext.Provider>
  )
}
