import React from 'react'
import './App.css'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import Contact from './components/contact/contact'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Mains from './components/main1/section'
import News from './components/news/news'
import Footer from './components/footer/footer'



function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <Contact/>
      <Hero/>
      <Main/>
      <Mains/>
      <News/>
      <Footer/>
    </>
  )
}

export default App
