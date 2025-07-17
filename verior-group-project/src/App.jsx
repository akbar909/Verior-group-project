import React from 'react'
import Home from './pages/Home'

import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import { fromJSON } from 'postcss'
const App = () => {
  return (
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App