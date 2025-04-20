export default async function handler(req, res) {
    const API_KEY = process.env.NEWS_API_KEY
  
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=32&apiKey=${API_KEY}`, {
      headers: {
        "User-Agent": "MyNewsApp/1.0"
      }
    })
  
    const data = await response.json()
    res.status(200).json(data)
  }
  