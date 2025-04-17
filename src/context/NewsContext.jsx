// src/context/NewsContext.jsx
import { createContext, useState, useContext, useEffect } from "react"

const NewsContext = createContext()

export function NewsProvider({ children }) {
  const [savedArticles, setSavedArticles] = useState(() => {
    const stored = localStorage.getItem("saved_articles")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("saved_articles", JSON.stringify(savedArticles))
  }, [savedArticles])

  const saveArticle = (article) => {
    if (!savedArticles.find((a) => a.url === article.url)) {
      setSavedArticles([...savedArticles, article])
    }
  }

  const removeArticle = (url) => {
    setSavedArticles(savedArticles.filter((a) => a.url !== url))
  }

  return (
    <NewsContext.Provider value={{ savedArticles, saveArticle, removeArticle }}>
      {children}
    </NewsContext.Provider>
  )
}

export function useNews() {
  return useContext(NewsContext)
}
