import { useState } from "react"
import { ArticleCard } from "../components/ArticleCard"

const API_KEY = "aa6b4ff5e49545cab2f0a64234f3198c"

export function Search() {
  const [query, setQuery] = useState("")
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(false)

    fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }

  return (
    <main>
      <center><h1 className="text-2xl font-bold mb-4">Search Articles</h1></center>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. climate change"
          className="p-2 border border-[#d6c6a3] bg-[#fefae0] w-64 rounded-l"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#d6c6a3] text-black border border-[#b4a57e] rounded-r hover:bg-[#cabb98]"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Searching...</p>}
      {error && <p className="text-red-600">Error loading results.</p>}
      {!loading && !error && articles.length > 0 && (
        <div className="results">
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      )}
      {!loading && !error && articles.length === 0 && query && (
        <p>No results found for "{query}".</p>
      )}
    </main>
  )
}
