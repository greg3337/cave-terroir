import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Hero from '@/components/Hero'
import Catalogue from '@/components/Catalogue'
import Histoire from '@/components/Histoire'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <Catalogue />
        <Histoire />
      </main>
      <Footer />
    </CartProvider>
  )
}
