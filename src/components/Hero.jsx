import { ArrowDownRight, MoveUpRight } from 'lucide-react'
import { studio } from '../data/studio'

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[0.92fr_1.08fr] md:px-10 md:pb-24 md:pt-16">
        <div className="relative z-10">
          <div className="eyebrow mb-7"><span className="eyebrow-dot" /> A little more room to feel good</div>
          <h1 className="max-w-2xl font-display text-[3.7rem] leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.7rem]">
            Come back<br />to <em className="font-normal text-accent">yourself.</em>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-ink/65 md:text-lg md:leading-8">
            A considered space for movement, strength and stillness. Find your rhythm at Motion Studios, Abuja.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="button-dark" href={studio.whatsappUrl} target="_blank" rel="noreferrer">Find your session <MoveUpRight size={16} /></a>
            <a className="button-text" href="#approach">Discover our approach <ArrowDownRight size={16} /></a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-ink/10 pt-5">
            <div className="flex -space-x-2">
              {['#A36F4F', '#805234', '#F5F0E8'].map((color, i) => <span key={color} className="h-8 w-8 rounded-full border-2 border-paper" style={{ backgroundColor: color }} />)}
            </div>
            <p className="text-xs leading-5 text-ink/60"><strong className="font-semibold text-ink">{studio.rating}/5 studio rating</strong><br />A growing community in Wuse, Abuja</p>
          </div>
        </div>
        <div className="hero-visual">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=85"
            alt="Woman stretching in a calm, light-filled wellness studio"
          />
          <div className="hero-image-overlay" />
          <div className="hero-note">
            <span className="font-display text-3xl italic">move with intention</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.25em] text-white/75">Pilates · Wellness · Community</span>
          </div>
          <div className="vertical-label">YOUR SPACE TO RESET — ABUJA</div>
          <div className="image-index">01 <span /> 03</div>
        </div>
      </div>
      <div className="absolute -right-20 top-24 -z-0 h-72 w-72 rounded-full bg-sand/70 blur-3xl" />
    </section>
  )
}
