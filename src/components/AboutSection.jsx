import { Flower2, HeartPulse, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const values = [
  { icon: Flower2, title: 'Move with care', copy: 'Thoughtful movement that meets you where you are, whether you are beginning or building a deeper practice.' },
  { icon: HeartPulse, title: 'Feel your strength', copy: 'Build stability, mobility and body awareness at a pace that respects your own progress.' },
  { icon: Sparkles, title: 'Make space for you', copy: 'A welcoming women-focused community where your wellbeing gets to be part of the plan.' },
]

export default function AboutSection() {
  return (
    <section id="approach" className="border-y border-ink/10 bg-[#eeebe3]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-28">
        <SectionHeading kicker="The Motion feeling" title={<>Not another thing<br />on your to-do list.</>} description="Think of this as time you give back to yourself. A pause from the noise, a chance to reconnect with your body, and a practice that can grow with you." />
        <div className="grid gap-0 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, copy }, i) => (
            <article key={title} className={`value-card ${i !== 0 ? 'sm:border-l sm:border-ink/10 sm:pl-6' : ''}`}>
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-olive/30 text-olive"><Icon size={21} strokeWidth={1.4} /></span>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/60">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
