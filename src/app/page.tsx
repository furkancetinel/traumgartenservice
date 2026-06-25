import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import Reviews from '@/components/Reviews'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
