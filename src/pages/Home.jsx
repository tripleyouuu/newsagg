// src/pages/Home.jsx
import { useEffect, useState } from "react"
import { ArticleCard } from "../components/ArticleCard"

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=32&apiKey=${API_KEY}`;


export function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center">Loading top headlines...</p>
  if (error) return <p className="text-center text-red-600">Failed to load news.</p>

  return (
    <div>
    <center><h1 className="text-2xl font-bold">Top Headlines</h1></center>
      <div className="article-grid">
        {articles.map((article) => (
          <div key={article.url} className="article-card">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  )
}
