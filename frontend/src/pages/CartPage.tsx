import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartPage.css'

export const CartPage = () => {
  const { items, subtotal, removeItem, updateQuantity, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="cart-page__empty">
        <h1>Your cart is ready for something special</h1>
        <p>Discover curated collections built for mindful living and add your next favorite find.</p>
        <Link to="/products" className="btn btn--primary">
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <header className="cart-page__header">
        <div>
          <p className="tag">Seamless checkout</p>
          <h1>Review your selection</h1>
        </div>
        <button type="button" className="btn btn--ghost" onClick={clearCart}>
          Clear cart
        </button>
      </header>

      <div className="cart-page__grid">
        <div className="cart-page__items glass-card">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th aria-label="Remove" />
              </tr>
            </thead>
            <tbody>
              {items.map(({ product, quantity }) => (
                <tr key={product.id}>
                  <td>
                    <div className="cart-page__product">
                      <img src={product.image} alt={product.name} />
                      <div>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                        <span>{product.brand}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="cart-page__quantity">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>${(product.price * quantity).toFixed(2)}</td>
                  <td>
                    <button
                      type="button"
                      className="cart-page__remove"
                      onClick={() => removeItem(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="cart-page__summary glass-card">
          <h2>Order summary</h2>
          <div className="cart-page__summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div className="cart-page__summary-row">
            <span>Shipping</span>
            <span className="tag">Free carbon-neutral shipping</span>
          </div>
          <div className="cart-page__summary-row">
            <span>Estimated tax</span>
            <span>Calculated at checkout</span>
          </div>
          <button type="button" className="btn btn--primary cart-page__checkout">
            Proceed to checkout
          </button>
          <p className="cart-page__note">Secure payment · Apple Pay · Google Pay · Klarna</p>
        </aside>
      </div>
    </div>
  )
}
