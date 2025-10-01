import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { CartPage } from './pages/CartPage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { ProfilePage } from './pages/ProfilePage'
import { ComingSoonPage } from './pages/ComingSoonPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="collections" element={<ComingSoonPage />} />
        <Route path="about" element={<ComingSoonPage />} />
        <Route path="stories" element={<ComingSoonPage />} />
        <Route path="support">
          <Route path="shipping" element={<ComingSoonPage />} />
          <Route path="faqs" element={<ComingSoonPage />} />
          <Route path="orders" element={<ComingSoonPage />} />
        </Route>
        <Route path="contact" element={<ComingSoonPage />} />
        <Route path="press" element={<ComingSoonPage />} />
        <Route path="impact" element={<ComingSoonPage />} />
        <Route path="careers" element={<ComingSoonPage />} />
        <Route path="privacy" element={<ComingSoonPage />} />
        <Route path="terms" element={<ComingSoonPage />} />
        <Route path="cookies" element={<ComingSoonPage />} />
        <Route path="password-reset" element={<ComingSoonPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
