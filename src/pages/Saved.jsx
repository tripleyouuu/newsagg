import { useNews } from "../context/NewsContext"
import { ArticleCard } from "../components/ArticleCard"

export function Saved() {
  const { savedArticles } = useNews()

  return (
    <main>
      <center><h1 className="text-2xl font-bold mb-4">Saved Articles</h1></center>
      {savedArticles.length === 0 ? (
        <p className="text-gray-600">Nothing here yet. Save articles from other pages for easy access.</p>
      ) : (
        savedArticles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))
      )}
    </main>
  )
}
