import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import './i18n';
import 'aos/dist/aos.css';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

defineElement(lottie.loadAnimation);

const App = () => {
  return (
    <main className='max-w-7xl mx-auto select-none'>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </main>
  )
}

export default App