import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import './ComingSoonPage.css'

const pageCopy: Record<string, { title: string; description: string }> = {
  '/collections': {
    title: 'Collections launching soon',
    description:
      'We are crafting seasonal edits in collaboration with visionary designers. Stay tuned for a release schedule crafted exclusively for members.',
  },
  '/about': {
    title: 'Our story is evolving',
    description:
      'NamZone began as a boutique marketplace for mindful goods. We are expanding to deliver immersive experiences online and in-person.',
  },
  '/stories': {
    title: 'Editorial reimagined',
    description:
      'We are building a new editorial destination featuring behind-the-scenes stories, interviews, and design insights.',
  },
  '/support/shipping': {
    title: 'Shipping & returns',
    description: 'Detailed logistics support will arrive soon. For now, enjoy free express delivery on every order.',
  },
  '/support/faqs': {
    title: 'Answers on the way',
    description:
      'We are updating our knowledge base with refreshed content designed to support every step of your journey.',
  },
  '/support/orders': {
    title: 'Order tracking coming soon',
    description:
      'Real-time order tracking is being built. We will notify you once the new dashboard experience is live.',
  },
  '/contact': {
    title: 'Connect with our concierge team',
    description:
      'Our specialists are available 24/7 via live chat and will soon be reachable from this dedicated hub.',
  },
  '/press': {
    title: 'Press kit in progress',
    description:
      'Media resources, brand assets, and leadership bios will be available shortly. Reach out to press@namzone.com.',
  },
  '/impact': {
    title: 'Impact report in preparation',
    description:
      'We are documenting our sustainability commitments and community partnerships for a transparent annual report.',
  },
  '/careers': {
    title: 'We are hiring soon',
    description:
      'The next wave of roles across product, retail, and experience design will be announced here.',
  },
  '/privacy': {
    title: 'Privacy center under construction',
    description:
      'A refreshed privacy experience with clear controls and insights is being finalized.',
  },
  '/terms': {
    title: 'Terms of service update',
    description:
      'Our legal team is crafting accessible terms aligned with our evolving platform.',
  },
  '/cookies': {
    title: 'Cookie preferences coming soon',
    description:
      'Manage tracking preferences and learn more about how we create delightful personalization experiences.',
  },
  '/password-reset': {
    title: 'Password reset hub',
    description:
      'Self-service password recovery will be live shortly. For now, reach out to support@namzone.com.',
  },
}

export const ComingSoonPage = () => {
  const location = useLocation()

  const copy = useMemo(() => pageCopy[location.pathname] ?? pageCopy['/collections'], [location])

  return (
    <div className="coming-soon">
      <div className="coming-soon__card glass-card">
        <p className="tag">In progress</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
        <span className="coming-soon__badge">Launching 2025</span>
      </div>
    </div>
  )
}
