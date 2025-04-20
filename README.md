# 📰 News Aggregator

A simple, professional, old-timey news aggregator built with **React**, **Tailwind CSS**, and the **NewsAPI**. Users can browse top headlines, filter by category, view article details, and save favorite posts with persistent storage via `localStorage`.

---

## 🌐 Live Demo

Find the project deployed at: https://newsagg.vercel.app/

---

## ℹ️ Disclaimer

This project was developed for a term assignment as part of my undergrad course. It isn't for commercial purposes, or meant to be taken too seriously!

---

## 🧰 Tech Stack

- **React** (Components, Hooks, Props, Conditional Rendering, Forms, Lists)
- **React Router** (multi-page navigation)
- **React Context API** (global state for saved articles)
- **Tailwind CSS** (custom neutral / sepia design)
- **NewsAPI** ([https://newsapi.org](https://newsapi.org))
- **LocalStorage** (to persist saved articles)
- **Vercel** for deployment.

---

## 📁 Features

- 📰 **Home**: Top headlines laid out in a responsive flexbox grid  
- 🎛️ **Categories**: Filter news by category (Business, Tech, Health, etc.)  
- 🔎 **Search**: Type in a current affairs topic to find relevant articles
- 💾 **Saved**: Save and persist your favorite articles  
- 📖 **Source Article**: Click links attached to each article for the original  
- 📱 **Responsive**: Mobile and desktop ready
- 🎨 **Typography**: Newspaper-inspired font and parchment-style design

---

## 🛠 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/news-aggregator.git
cd news-aggregator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Tailwind (if not already)

```bash
npx tailwindcss init -p
```

### 4. Add your NewsAPI Key

Edit `NewsContext.jsx` or wherever the API key is used:

```js
const apiKey = 'YOUR_API_KEY_HERE';
```

Or store it as an environment variable using `.env`:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

> And reference it in code with `import.meta.env.VITE_NEWS_API_KEY`.

### 5. Run the Dev Server

```bash
npm run dev
```

App runs on `http://localhost:5173`

---

## 💡 Future Improvements

If/when I find the time to work on this project again, I'd add these features to improve it:

- Pagination
- Search bar with debouncing
- Dark mode toggle
- Backend storage for saved posts (MongoDB/Firebase)
- Authentication with saved feeds