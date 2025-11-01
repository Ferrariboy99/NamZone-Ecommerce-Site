import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
  layout?: 'grid' | 'list'
}

export const ProductCard = ({ product, layout = 'grid' }: ProductCardProps) => {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    if (!isAdding) {
      return
    }

    const timeout = window.setTimeout(() => setIsAdding(false), 1400)

    return () => window.clearTimeout(timeout)
  }, [isAdding])

  const handleAddToCart = () => {
    addItem(product)
    setIsAdding(true)
  }

  return (
    <article className={`product-card product-card--${layout}`}>
      <div className="product-card__media">
        <Link to={`/products/${product.id}`} className="product-card__media-link">
          <img src={product.image} alt={product.name} loading="lazy" />
          <div className="product-card__badges">
            {product.badges?.map((badge) => (
              <span key={badge} className="tag">
                {badge}
              </span>
            ))}
          </div>
        </Link>
      </div>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span>{product.brand}</span>
          <span>★ {product.rating.toFixed(1)}</span>
        </div>
        <Link to={`/products/${product.id}`} className="product-card__title-link">
          <h3>{product.name}</h3>
        </Link>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          <span className="product-card__reviews">{product.reviews.toLocaleString()} reviews</span>
        </div>
        <div className="product-card__actions">
          <Link
            to={`/products/${product.id}`}
            className="product-card__action product-card__action--ghost"
          >
            View details
          </Link>
          <button
            type="button"
            className="product-card__action product-card__action--primary"
            data-state={isAdding ? 'added' : 'default'}
            onClick={handleAddToCart}
          >
            {isAdding ? 'Added' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
