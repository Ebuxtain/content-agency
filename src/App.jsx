import React from 'react';
import Section from './components/Sections';
import Home from './components/Home'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Blog from './components/blog'
import Aboutus from './components/Aboutus';
import Services from './components/Services';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Home />
      <Section />
      <Services/>
      <Aboutus/>
      <Partners />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
