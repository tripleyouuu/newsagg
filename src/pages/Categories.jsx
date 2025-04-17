import { useEffect, useState } from "react"
import { ArticleCard } from "../components/ArticleCard"

const API_KEY = "aa6b4ff5e49545cab2f0a64234f3198c"
const categories = ["business", "entertainment", "health", "science", "sports", "technology"]

export function Categories() {
  const [selected, setSelected] = useState("technology")
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${selected}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [selected])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Browse by Category</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-3 py-1 border rounded-full text-sm ${
              selected === cat
                ? "bg-[#d6c6a3] text-black"
                : "bg-[#fefae0] border-[#d6c6a3] hover:bg-[#eee5cc]"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading && <p className="text-gray-600">Loading news...</p>}
      {error && <p className="text-red-600">Error loading articles.</p>}
      {!loading &&
        !error &&
        (articles.length === 0 ? (
          <p>No articles found for this category.</p>
        ) : (
          articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))
        ))}
    </div>
  )
}
