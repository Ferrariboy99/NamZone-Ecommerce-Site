import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './Hero.css'

const HERO_ROTATION_MS = 8000

const hexToRgba = (hex: string, alpha: number) => {
  const sanitized = hex.replace('#', '')

  if (sanitized.length !== 6) {
    return hex
  }

  const numeric = Number.parseInt(sanitized, 16)
  const r = (numeric >> 16) & 255
  const g = (numeric >> 8) & 255
  const b = numeric & 255

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

type HeroStat = { value: string; label: string }
type HeroCard = { eyebrow: string; title: string; subtitle: string }
type HeroStory = {
  id: string
  label: string
  eyebrow: string
  title: string
  description: string
  stats: HeroStat[]
  featureCards: HeroCard[]
  accent: string
  accentSecondary: string
}

const heroStories: HeroStory[] = [
  {
    id: 'mindful-design',
    label: 'Mindful design',
    eyebrow: 'Experience retail beyond the ordinary',
    title: 'Discover mindful design,\nengineered for daily delight.',
    description:
      'NamZone curates elevated essentials from leading innovators. Explore collections crafted for living beautifully, sustainably, and intelligently.',
    stats: [
      { value: '1.2M+', label: 'Community members' },
      { value: '48h avg.', label: 'Express delivery worldwide' },
      { value: '4.9/5', label: 'Customer satisfaction' },
    ],
    featureCards: [
      { eyebrow: 'Featured drop', title: 'Aurora Luxe Collection', subtitle: 'Wearable tech, refined' },
      { eyebrow: 'Member perks', title: 'Carbon-neutral shipping', subtitle: 'on every order' },
    ],
    accent: '#7b5bff',
    accentSecondary: '#00c6ff',
  },
  {
    id: 'conscious-living',
    label: 'Conscious living',
    eyebrow: 'Curations for a lighter footprint',
    title: 'Champion circular brands\nwith measurable impact.',
    description:
      'Shop limited-run collaborations and recycled materials built to last. Every purchase supports climate-positive partners and regenerative makers.',
    stats: [
      { value: '92%', label: 'Certified eco materials' },
      { value: '180K+', label: 'Kilos of waste diverted' },
      { value: '65', label: 'Impact-driven creators' },
    ],
    featureCards: [
      { eyebrow: 'New arrival', title: 'Tideform Studio', subtitle: 'Reclaimed ocean textiles' },
      { eyebrow: 'Give back', title: '1% to Earthship Fund', subtitle: 'with every order' },
    ],
    accent: '#22d3ee',
    accentSecondary: '#a855f7',
  },
  {
    id: 'smart-living',
    label: 'Smart living',
    eyebrow: 'Adaptive tools for modern homes',
    title: 'Elevate routines with\nintelligent essentials.',
    description:
      'From wellness tech to modular furniture, NamZone sources versatile pieces that respond to your rhythms and streamline daily rituals effortlessly.',
    stats: [
      { value: '35%', label: 'Average time saved weekly' },
      { value: '27', label: 'Patented smart integrations' },
      { value: '24/7', label: 'Member concierge support' },
    ],
    featureCards: [
      { eyebrow: 'Spotlight', title: 'Halo Home System', subtitle: 'Ambient intelligence hub' },
      { eyebrow: 'Member upgrade', title: 'Complimentary setup', subtitle: 'with white-glove care' },
    ],
    accent: '#f97316',
    accentSecondary: '#38bdf8',
  },
]

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % heroStories.length)
    }, HERO_ROTATION_MS)

    return () => window.clearTimeout(timer)
  }, [activeIndex, prefersReducedMotion])

  const activeStory = heroStories[activeIndex]
  const accentStyle = {
    '--hero-accent': activeStory.accent,
    '--hero-accent-secondary': activeStory.accentSecondary,
    '--hero-accent-soft': hexToRgba(activeStory.accent, 0.38),
    '--hero-accent-secondary-soft': hexToRgba(activeStory.accentSecondary, 0.32),
    '--hero-rotation': `${HERO_ROTATION_MS}ms`,
  } as CSSProperties

  const renderTitle = (title: string) =>
    title.split('\n').map((line, index, array) => (
      <span key={`${activeStory.id}-${line}`}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ))

  return (
    <section className="hero glass-card" style={accentStyle}>
      <div className="hero__tabs" role="group" aria-label="Featured experiences">
        {heroStories.map((story, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={story.id}
              type="button"
              className={`hero__tab ${isActive ? 'active' : ''}`.trim()}
              aria-pressed={isActive}
              aria-label={`Show ${story.label.toLowerCase()} spotlight`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{story.label}</span>
              <span
                className={`hero__tab-progress ${
                  isActive && !prefersReducedMotion ? 'is-animating' : ''
                }`.trim()}
              />
            </button>
          )
        })}
      </div>

      <div className="hero__content">
        <div className="hero__eyebrow tag">
          <span>✨</span>
          <span>{activeStory.eyebrow}</span>
        </div>
        <h1>{renderTitle(activeStory.title)}</h1>
        <p>{activeStory.description}</p>
        <div className="hero__cta">
          <Link to="/products" className="btn btn--primary">
            Shop the collection
          </Link>
          <Link to="/about" className="btn btn--ghost">
            Explore our vision
          </Link>
        </div>
        <dl className="hero__stats">
          {activeStory.stats.map((stat) => (
            <div key={`${activeStory.id}-${stat.label}`}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero__visual">
        <div className="hero__orb" aria-hidden="true" />
        {activeStory.featureCards.map((card, index) => (
          <div
            key={`${activeStory.id}-${card.title}`}
            className={`hero__card ${index === 1 ? 'hero__card--secondary' : ''}`.trim()}
          >
            <p>{card.eyebrow}</p>
            <strong>{card.title}</strong>
            <span>{card.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
