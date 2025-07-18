import React from 'react'
import Home from './pages/Home'

import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Bookshelf from './pages/Bookshelf'
import TechStack from './pages/TechStack'
const App = () => {
  return (
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/tech-stack" element={<TechStack />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App