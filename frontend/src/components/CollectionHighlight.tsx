import { featuredCollections } from '../data/products'
import './CollectionHighlight.css'

export const CollectionHighlight = () => {
  return (
    <section className="section collection-highlight">
      <div className="section__header">
        <div>
          <h2>Elevated collections</h2>
          <p>Limited-edition collaborations and signature releases curated each month.</p>
        </div>
        <button className="btn btn--ghost" type="button">
          View all collections
        </button>
      </div>

      <div className="collection-highlight__grid">
        {featuredCollections.map((collection) => (
          <article key={collection.title} className="collection-card">
            <img src={collection.image} alt={collection.title} loading="lazy" />
            <div className="collection-card__overlay" />
            <div className="collection-card__content">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <button className="btn btn--primary" type="button">
                Discover now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
