import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './AuthPages.css'

export const LoginPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Placeholder for authentication integration
    alert('Login functionality is not connected to a backend in this demo build.')
  }

  return (
    <div className="auth-page">
      <div className="auth-page__card glass-card">
        <p className="tag">Welcome back</p>
        <h1>Sign in to continue</h1>
        <p className="auth-page__subtitle">
          Access member-only drops, order history, and personalized experiences.
        </p>
        <form className="auth-page__form" onSubmit={handleSubmit}>
          <label>
            Email address
            <input type="email" name="email" required placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" name="password" required placeholder="••••••••" />
          </label>
          <div className="auth-page__actions">
            <label className="auth-page__remember">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <Link to="/password-reset">Forgot password?</Link>
          </div>
          <button type="submit" className="btn btn--primary auth-page__submit">
            Sign in
          </button>
        </form>
        <p className="auth-page__switch">
          New to NamZone? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  )
}
