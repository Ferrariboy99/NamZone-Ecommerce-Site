import { categories } from '../data/products'
import './CategoryShowcase.css'

export const CategoryShowcase = () => {
  return (
    <section className="section category-showcase">
      <div className="section__header">
        <div>
          <h2>Shop by category</h2>
          <p>Curated assortments to match your rituals and ambitions.</p>
        </div>
        <span className="tag">Dynamic selection updated weekly</span>
      </div>
      <div className="category-showcase__grid">
        {categories.map((category) => (
          <article key={category} className="category-card">
            <div className="category-card__gradient" />
            <h3>{category}</h3>
            <p>Discover limited drops, signature pieces, and top-rated essentials.</p>
            <button className="btn btn--ghost" type="button">
              Explore
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
