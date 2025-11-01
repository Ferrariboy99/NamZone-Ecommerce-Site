import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Stories', to: '/stories' },
]

export const Navbar = () => {
  const { itemCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar glass-card ${isMenuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__brand">
        <Link to="/" onClick={closeMenu}>
          <span className="navbar__spark" />
          <span className="navbar__title">NamZone</span>
        </Link>
      </div>

      <button
        type="button"
        className="navbar__toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="site-navigation"
        className="navbar__links"
        aria-label="Primary"
        data-open={isMenuOpen}
      >
        <div className="navbar__links-list">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar__mobile-actions">
          <Link to="/cart" className="navbar__cart" onClick={closeMenu}>
            <span className="navbar__cart-icon">🛒</span>
            <span className="navbar__cart-label">Cart</span>
            {itemCount > 0 && <span className="navbar__cart-count">{itemCount}</span>}
          </Link>
          <Link to="/login" className="navbar__login" onClick={closeMenu}>
            Sign in
          </Link>
          <Link to="/signup" className="btn btn--primary navbar__cta" onClick={closeMenu}>
            Join NamZone
          </Link>
        </div>
      </nav>

      <div className="navbar__actions">
        <Link to="/login" className="navbar__login">
          Sign in
        </Link>
        <Link to="/cart" className="navbar__cart">
          <span className="navbar__cart-icon">🛒</span>
          <span className="navbar__cart-label">Cart</span>
          {itemCount > 0 && <span className="navbar__cart-count">{itemCount}</span>}
        </Link>
        <Link to="/signup" className="btn btn--primary navbar__cta">
          Join NamZone
        </Link>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="navbar__backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}
