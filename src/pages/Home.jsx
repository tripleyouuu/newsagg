import { useEffect, useState } from "react"
import { ArticleCard } from "../components/ArticleCard"

export function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("/api/news")
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  )
}
