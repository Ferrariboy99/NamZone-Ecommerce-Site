import './ProfilePage.css'

const mockInsights = [
  { label: 'Orders', value: '26', caption: 'Completed deliveries' },
  { label: 'Impact', value: '128kg', caption: 'Carbon offset contribution' },
  { label: 'Rewards', value: '4.2k', caption: 'Loyalty points available' },
]

const mockPreferences = [
  'Personalized alerts for sustainable drops',
  'Priority access to experiential pop-ups',
  'Style briefings for wellness and travel',
]

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header>
        <p className="tag">Member since 2021</p>
        <h1>Hello, Jordan</h1>
        <p className="profile-page__subtitle">
          Track your activity, manage preferences, and explore curated recommendations tailored to
          your rituals.
        </p>
      </header>

      <section className="profile-page__section">
        <h2>Membership insights</h2>
        <div className="profile-page__insights">
          {mockInsights.map((insight) => (
            <article key={insight.label} className="profile-page__insight glass-card">
              <span>{insight.label}</span>
              <strong>{insight.value}</strong>
              <p>{insight.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-page__section">
        <h2>Preferred experiences</h2>
        <div className="profile-page__preferences glass-card">
          <ul>
            {mockPreferences.map((preference) => (
              <li key={preference}>{preference}</li>
            ))}
          </ul>
          <button type="button" className="btn btn--ghost">
            Update preferences
          </button>
        </div>
      </section>
    </div>
  )
}
