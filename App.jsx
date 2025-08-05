import { useState } from 'react'
import Navigation from './Navigation'
import RainEffect from './RainEffect'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app">
      <RainEffect />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? <HomePage /> : <AboutPage />}
    </div>
  )
}

export default App