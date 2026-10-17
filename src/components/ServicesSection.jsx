import { MoveUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { studio } from '../data/studio'

const experiences = [
  {
    number: '01',
    title: 'Pilates',
    subtitle: 'Strength from the inside out',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85',
    description: 'Build control, length and balance through considered movement and mindful practice.',
  },
  {
    number: '02',
    title: 'Wellness',
    subtitle: 'A softer kind of reset',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85',
    description: 'Make room for recovery, rest and rituals that help you feel more like yourself.',
  },
  {
    number: '03',
    title: 'Community',
    subtitle: 'Better, together',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85',
    description: 'Find encouragement in a warm, women-focused space built around showing up for you.',
  },
]

export default function ServicesSection() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <SectionHeading kicker="Find your flow" title={<>A practice for<br /><em className="font-normal text-accent">where you are.</em></>} />
        <p className="max-w-sm pb-1 text-sm leading-6 text-ink/60">Start with what feels right. We’ll help you discover the sessions and rituals that fit your life.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {experiences.map((item) => (
          <article className="experience-card group" key={item.number}>
            <div className="experience-image-wrap">
              <img src={item.image} alt={item.title} className="experience-image" loading="lazy" />
              <span className="experience-number">{item.number}</span>
              <a href={studio.whatsappUrl} target="_blank" rel="noreferrer" className="experience-arrow" aria-label={`Ask about ${item.title}`}><MoveUpRight size={18} /></a>
            </div>
            <div className="pt-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{item.subtitle}</p>
              <h3 className="mt-2 font-display text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-ink/60">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-xs text-ink/45">Please contact the studio to confirm current services, session formats and availability.</p>
    </section>
  )
}
