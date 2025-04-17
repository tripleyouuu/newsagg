import { Link, useLocation } from "react-router-dom"

export function Header() {
  const { pathname } = useLocation()

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Categories", to: "/categories" },
    { label: "Search", to: "/search" },
    { label: "Saved", to: "/saved" },
  ]

  return (
    <header className="navbar">
      <nav className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link ${pathname === link.to ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
