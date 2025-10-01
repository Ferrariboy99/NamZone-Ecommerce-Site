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

  return (
    <header className="navbar glass-card">
      <div className="navbar__brand">
        <Link to="/">
          <span className="navbar__spark" />
          <span className="navbar__title">NamZone</span>
        </Link>
      </div>

      <nav className="navbar__links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
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
    </header>
  )
}
