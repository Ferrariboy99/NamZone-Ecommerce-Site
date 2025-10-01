import { Hero } from '../components/Hero'
import { CategoryShowcase } from '../components/CategoryShowcase'
import { CollectionHighlight } from '../components/CollectionHighlight'
import { Testimonials } from '../components/Testimonials'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import './HomePage.css'

export const HomePage = () => {
  const spotlight = products.slice(0, 4)

  return (
    <div className="home-page">
      <Hero />

      <section className="section home-page__spotlight">
        <div className="section__header">
          <div>
            <h2>This week’s spotlight</h2>
            <p>Meticulously curated selections designed to elevate everyday experiences.</p>
          </div>
          <div className="home-page__controls">
            <button className="btn btn--ghost" type="button">
              View drops
            </button>
            <button className="btn btn--ghost" type="button">
              Personalize feed
            </button>
          </div>
        </div>
        <div className="home-page__spotlight-grid">
          {spotlight.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CategoryShowcase />
      <CollectionHighlight />
      <Testimonials />
    </div>
  )
}
