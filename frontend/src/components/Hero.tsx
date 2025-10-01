import { Link } from 'react-router-dom'
import './Hero.css'

export const Hero = () => {
  return (
    <section className="hero glass-card">
      <div className="hero__content">
        <div className="hero__eyebrow tag">
          <span>✨</span>
          <span>Experience retail beyond the ordinary</span>
        </div>
        <h1>
          Discover mindful design,
          <br /> engineered for daily delight.
        </h1>
        <p>
          NamZone curates elevated essentials from leading innovators. Explore collections crafted
          for living beautifully, sustainably, and intelligently.
        </p>
        <div className="hero__cta">
          <Link to="/products" className="btn btn--primary">
            Shop the collection
          </Link>
          <Link to="/about" className="btn btn--ghost">
            Explore our vision
          </Link>
        </div>
        <dl className="hero__stats">
          <div>
            <dt>1.2M+</dt>
            <dd>Community members</dd>
          </div>
          <div>
            <dt>48h avg.</dt>
            <dd>Express delivery worldwide</dd>
          </div>
          <div>
            <dt>4.9/5</dt>
            <dd>Customer satisfaction</dd>
          </div>
        </dl>
      </div>
      <div className="hero__visual">
        <div className="hero__orb" />
        <div className="hero__card">
          <p>Featured drop</p>
          <strong>Aurora Luxe Collection</strong>
          <span>Wearable tech, refined</span>
        </div>
        <div className="hero__card hero__card--secondary">
          <p>Member perks</p>
          <strong>Carbon-neutral shipping</strong>
          <span>on every order</span>
        </div>
      </div>
    </section>
  )
}
