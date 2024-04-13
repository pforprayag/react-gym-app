// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import About2 from './components/About2'
import About3 from './components/About3'
import Contact from './components/Contact'
import Price from './components/Price'
import Banner from './components/Banner'
import Testmonial from './components/Testmonial'
import Footer from './components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, [])
  return (
    <div className='overflow-x-hidden overflow-hidden dark:bg-black bg-white dark:text-white text-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <About2></About2>
      <About3></About3>
      <Contact></Contact>
      <Price></Price>
      <Banner></Banner>
      <Testmonial></Testmonial>
      <Footer></Footer>
    </div>
  )
}

export default App