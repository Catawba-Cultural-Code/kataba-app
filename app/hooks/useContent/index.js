import React, { createContext, useContext, useEffect, useState } from 'react'
const SERVER_URL = 'https://kataba-app.herokuapp.com'
const ContentContext = createContext()

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState([])
  useEffect(() => {
    fetch(`${SERVER_URL}/api/content`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r)
        setContent(r)
      })
  }, [])

  return (
    <ContentContext.Provider value={{ content }}>
      {children}
    </ContentContext.Provider>
  )
}

const useContent = () => {
  const { content } = useContext(ContentContext)

  return content.items || []
}

export default useContent
