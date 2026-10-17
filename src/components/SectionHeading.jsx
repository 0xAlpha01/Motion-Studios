export default function SectionHeading({ kicker, title, description, light = false }) {
  return (
    <div className={`section-heading ${light ? 'text-paper' : ''}`}>
      <p className={`eyebrow mb-5 ${light ? 'text-paper/65' : ''}`}><span className="eyebrow-dot" /> {kicker}</p>
      <h2 className="font-display text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl">{title}</h2>
      {description && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? 'text-paper/65' : 'text-ink/60'}`}>{description}</p>}
    </div>
  )
}
