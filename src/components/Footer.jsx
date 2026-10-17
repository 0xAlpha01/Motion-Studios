import { Instagram, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { studio } from '../data/studio'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-[1fr_1fr_1fr] md:px-10">
        <div>
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-olive/50 font-display text-xl text-olive">m</span>
            <span><span className="block font-display text-xl">motion</span><span className="block text-[9px] uppercase tracking-[0.25em] text-ink/50">studios · Abuja</span></span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-ink/55">Movement, wellness and a little more room to feel good.</p>
        </div>
        <div className="space-y-3 text-sm text-ink/65">
          <a className="footer-link" href={studio.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> {studio.address}</a>
          <a className="footer-link" href={`tel:${studio.phoneInternational}`}><Phone size={16} /> {studio.phone}</a>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <a className="footer-link" href={studio.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> {studio.instagramHandle} <ArrowUpRight size={13} /></a>
          <a className="footer-link" href={studio.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp enquiries <ArrowUpRight size={13} /></a>
          <p className="pt-3 text-[10px] uppercase tracking-[0.18em] text-ink/40">© {new Date().getFullYear()} Motion Studios</p>
        </div>
      </div>
      <div className="bg-[#eae5db] px-5 py-3 text-center text-[10px] text-ink/45">Website concept prepared for Motion Studios. Studio details should be confirmed before launch.</div>
    </footer>
  )
}
