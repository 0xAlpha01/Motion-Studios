import { useState } from 'react'
import { Menu, X, MoveUpRight } from 'lucide-react'
import { studio } from '../data/studio'

const links = [
  { label: 'The studio', href: '#studio' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Experiences', href: '#experiences' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20 border-b border-ink/10 bg-paper/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Motion Studios home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-olive/50 font-display text-xl text-olive">m</span>
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-tight">motion</span>
            <span className="block text-[9px] uppercase tracking-[0.28em] text-ink/55">studios · Abuja</span>
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => <a key={link.href} className="nav-link" href={link.href}>{link.label}</a>)}
          <a className="button-dark !px-5 !py-3 text-xs" href={studio.whatsappUrl} target="_blank" rel="noreferrer">
            Book a session <MoveUpRight size={15} />
          </a>
        </nav>
        <button className="rounded-full border border-ink/15 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && <nav className="flex flex-col gap-5 border-t border-ink/10 px-6 py-6 md:hidden">
        {links.map((link) => <a key={link.href} onClick={() => setOpen(false)} className="nav-link" href={link.href}>{link.label}</a>)}
        <a className="button-dark w-fit" href={studio.whatsappUrl} target="_blank" rel="noreferrer">Book a session <MoveUpRight size={15} /></a>
      </nav>}
    </header>
  )
}
