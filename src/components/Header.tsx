import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: '首頁' },
    { path: '/event-info', label: '賽事資訊' },
    { path: '/teams', label: '參賽隊伍' },
    { path: '/schedule', label: '賽程表' },
  ]

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">第十屆光復盃籃球邀請賽</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? 'text-white font-semibold border-b-2 border-white pb-1'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 ${
                  location.pathname === item.path
                    ? 'text-white font-semibold'
                    : 'text-blue-100 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
