import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
  layout?: 'grid' | 'list'
}

export const ProductCard = ({ product, layout = 'grid' }: ProductCardProps) => {
  return (
    <article className={`product-card product-card--${layout}`}>
      <Link to={`/products/${product.id}`}>
        <div className="product-card__image">
          <img src={product.image} alt={product.name} loading="lazy" />
          <div className="product-card__badges">
            {product.badges?.map((badge) => (
              <span key={badge} className="tag">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="product-card__body">
          <div className="product-card__meta">
            <span>{product.brand}</span>
            <span>★ {product.rating.toFixed(1)}</span>
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-card__footer">
            <span className="product-card__price">${product.price.toFixed(2)}</span>
            <span className="product-card__reviews">{product.reviews.toLocaleString()} reviews</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
