import React from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Post from './components/Post'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar />
        <Container/>
        <Post/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default App