import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mina Emad | Frontend Developer',
  description: 'portifolio',
  icon: '/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
        <div>{children}</div>
      <Footer />
    </html>
  )
}
