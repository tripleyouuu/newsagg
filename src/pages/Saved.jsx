import { useNews } from "../context/NewsContext"
import { ArticleCard } from "../components/ArticleCard"

export function Saved() {
  const { savedArticles } = useNews()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Saved Articles</h1>
      {savedArticles.length === 0 ? (
        <p className="text-gray-600">You haven’t saved any articles yet.</p>
      ) : (
        savedArticles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))
      )}
    </div>
  )
}
