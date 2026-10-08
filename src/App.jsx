import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BridalMehandi from './pages/BridalMehandi'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import BookAppointment from './pages/BookAppointment'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'


import { LanguageProvider } from './context/LanguageContext'
const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Loader show hoga
  if (loading) {
    return <Loader />
  }

  return (
    <LanguageProvider>


    <div>

      <Navbar />
        <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/bridal-mehndi' element={<BridalMehandi />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book-appointment' element={<BookAppointment />} />
      </Routes>

      <Footer />

    </div>
    </LanguageProvider>
  )
}

export default App