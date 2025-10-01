import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './AuthPages.css'

export const SignupPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Registration flow is not connected to a backend in this demo build.')
  }

  return (
    <div className="auth-page">
      <div className="auth-page__card glass-card">
        <p className="tag">Join the collective</p>
        <h1>Create your NamZone ID</h1>
        <p className="auth-page__subtitle">
          Unlock member-exclusive product drops, experiential events, and loyalty perks.
        </p>
        <form className="auth-page__form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" name="name" required placeholder="Jordan Smith" />
          </label>
          <label>
            Email address
            <input type="email" name="email" required placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" name="password" required placeholder="Create a password" />
          </label>
          <label className="auth-page__remember">
            <input type="checkbox" required />
            <span>I agree to the membership terms</span>
          </label>
          <button type="submit" className="btn btn--primary auth-page__submit">
            Create account
          </button>
        </form>
        <p className="auth-page__switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
