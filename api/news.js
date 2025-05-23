export default async function handler(req, res) {
    const API_KEY = process.env.NEWS_API_KEY
    const { category, q } = req.query
  
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  
    if (category) {
      url += `&category=${category}`
    }
  
    if (q) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&apiKey=${API_KEY}`
    }
  
    try {
      const response = await fetch(url)
      const data = await response.json()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch news" })
    }
  }
  