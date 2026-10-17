import { ArrowUpRight, MapPin, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { studio } from '../data/studio'

export default function StudioSection() {
  return (
    <section id="studio" className="bg-[#805234] text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_0.9fr] md:items-center md:px-10 md:py-24">
        <div className="studio-collage">
          <img className="collage-main" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=85" alt="Movement practice in a bright studio" loading="lazy" />
          <img className="collage-small" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=650&q=85" alt="Yoga and wellness equipment" loading="lazy" />
          <div className="collage-caption"><span className="font-display text-2xl italic">A room to breathe.</span><span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/65">Wuse · Abuja</span></div>
        </div>
        <div className="md:pl-5">
          <SectionHeading light kicker="Come as you are" title={<>Your corner<br />of calm in <em className="font-normal text-[#F5F0E8]">the city.</em></>} description="Tucked into Wuse, Motion Studios is a place to step away from the rush and reconnect with what matters: how you feel." />
          <div className="mt-8 flex items-start gap-4 border-t border-white/15 py-5">
            <MapPin className="mt-1 shrink-0 text-[#F5F0E8]" size={20} />
            <div><p className="text-sm leading-6 text-white/80">{studio.address}</p><a className="mt-2 inline-flex items-center gap-2 text-xs text-[#F5F0E8] underline underline-offset-4" href={studio.mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13} /></a></div>
          </div>
          <div className="flex items-start gap-4 border-t border-white/15 py-5">
            <Star className="mt-1 shrink-0 text-[#F5F0E8]" size={20} />
            <div><p className="text-sm text-white/80">{studio.rating} out of 5 on Google</p><p className="mt-1 text-xs text-white/45">Based on {studio.reviewCount} reviews shown on the business profile.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
