import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { studio } from '../data/studio'

export default function BookingCTA() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="cta-panel mx-auto max-w-7xl overflow-hidden rounded-sm px-6 py-14 text-center md:px-12 md:py-20">
        <p className="eyebrow justify-center text-paper/70"><span className="eyebrow-dot" /> Your time starts here</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-paper sm:text-5xl md:text-6xl">You don’t have to do it all.<br /><em className="font-normal text-[#F5F0E8]">Just begin with you.</em></h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/65">Ask us about sessions, availability and the best place to begin your Motion journey.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className="button-light" href={studio.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Start a WhatsApp conversation</a>
          <a className="button-outline-light" href={`tel:${studio.phoneInternational}`}>Call the studio <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}
