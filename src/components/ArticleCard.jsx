import { useNews } from "../context/NewsContext"

export function ArticleCard({ article, showSave = true }) {
  const { saveArticle, removeArticle, savedArticles } = useNews()
  const isSaved = savedArticles.some((a) => a.url === article.url)

  return (
    <div className="bg-[#fefae0] border border-[#d6c6a3] shadow-sm p-4 mb-4 rounded-lg">
      <h2 className="text-lg font-bold">{article.title}</h2>
      <p className="text-sm my-2">{article.description}</p>
      <a href={article.url} target="_blank" className="text-blue-700 underline text-sm">
        Read more
      </a>
      {showSave && (
        <div className="mt-2">
          {isSaved ? (
            <button onClick={() => removeArticle(article.url)} className="text-xs text-red-600 underline">Remove</button>
          ) : (
            <button onClick={() => saveArticle(article)} className="text-xs text-green-700 underline">Save</button>
          )}
        </div>
      )}
    </div>
  )
}
