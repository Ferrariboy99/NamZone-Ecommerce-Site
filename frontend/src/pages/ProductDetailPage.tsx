import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetailPage.css'

export const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  const product = useMemo(() => products.find((item) => item.id === productId), [productId])

  if (!product) {
    return (
      <div className="product-detail__empty">
        <h1>Product not found</h1>
        <p>We couldn’t locate the item you were looking for. Try exploring other collections.</p>
        <button type="button" className="btn btn--ghost" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    navigate('/cart')
  }

  const gallery = product.gallery.length > 0 ? product.gallery : [product.image]

  return (
    <div className="product-detail">
      <nav className="product-detail__breadcrumbs">
        <Link to="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <div className="product-detail__grid">
        <div className="product-detail__media glass-card">
          <div className="product-detail__hero">
            <img src={selectedImage ?? product.image} alt={product.name} />
          </div>
          <div className="product-detail__thumbnails">
            {gallery.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={image === (selectedImage ?? product.image) ? 'active' : undefined}
              >
                <img src={image} alt={product.name} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail__info">
          <p className="tag">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__description">{product.description}</p>

          <div className="product-detail__meta">
            <span>Brand: {product.brand}</span>
            <span>Rating: ★ {product.rating.toFixed(1)}</span>
            <span>{product.reviews.toLocaleString()} reviews</span>
            <span>{product.stock} in stock</span>
          </div>

          <div className="product-detail__options">
            <div>
              <h3>Colors</h3>
              <div className="product-detail__chips">
                {product.colors.map((color) => (
                  <span key={color}>{color}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Sizes</h3>
              <div className="product-detail__chips">
                {product.sizes.map((size) => (
                  <span key={size}>{size}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="product-detail__purchase glass-card">
            <div>
              <span className="product-detail__price">${product.price.toFixed(2)}</span>
              <p>Flexible payment options available at checkout.</p>
            </div>
            <div className="product-detail__quantity">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.min(product.stock, value + 1))}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button type="button" className="btn btn--primary" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
