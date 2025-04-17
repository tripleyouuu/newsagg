import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Categories } from "./pages/Categories"
import { Search } from "./pages/Search"
import { Saved } from "./pages/Saved"
import { Header } from "./components/Header"
import { NewsProvider } from "./context/NewsContext"

export default function App() {
  return (
    <NewsProvider>
      <Router>
        <div className="min-h-screen bg-[#fdf6e3] text-[#3e3e3e] font-serif">
          <Header />
          <main className="p-4 max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/search" element={<Search />} />
              <Route path="/saved" element={<Saved />} />
            </Routes>
          </main>
        </div>
      </Router>
    </NewsProvider>
  )
}
