import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import StudioSection from './components/StudioSection'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <StudioSection />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  )
}
