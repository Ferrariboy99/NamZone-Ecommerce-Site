import { testimonials } from '../data/products'
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <section className="section testimonials">
      <div className="section__header">
        <div>
          <h2>People love NamZone</h2>
          <p>High-impact experiences that keep customers coming back again and again.</p>
        </div>
      </div>
      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card glass-card">
            <div className="testimonial-card__header">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.title}</span>
              </div>
            </div>
            <p>“{testimonial.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  )
}
