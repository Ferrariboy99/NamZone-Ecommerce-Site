import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = [
  {
    title: 'Discover',
    links: [
      { label: 'New arrivals', to: '/products?sort=new' },
      { label: 'Top rated', to: '/products?sort=popular' },
      { label: 'Gift guides', to: '/collections' },
      { label: 'Editorial', to: '/stories' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping & returns', to: '/support/shipping' },
      { label: 'FAQs', to: '/support/faqs' },
      { label: 'Contact us', to: '/contact' },
      { label: 'Track order', to: '/support/orders' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About NamZone', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Sustainability', to: '/impact' },
      { label: 'Press', to: '/press' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid glass-card">
        <div className="footer__brand">
          <div className="footer__logo">
            <span />
            <strong>NamZone</strong>
          </div>
          <p>
            Curating experiences that blend innovation with mindful living. Join over 1M+ members
            exploring the future of retail.
          </p>
          <div className="footer__newsletter">
            <input type="email" placeholder="Get early access to drops" />
            <button className="btn btn--primary" type="button">
              Subscribe
            </button>
          </div>
        </div>

        {footerLinks.map((column) => (
          <div key={column.title} className="footer__column">
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__meta">
          <p>© {new Date().getFullYear()} NamZone Commerce. All rights reserved.</p>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
