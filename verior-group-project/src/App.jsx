import React from 'react'
import Home from './pages/Home'

import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Bookshelf from './pages/Bookshelf'
import TechStack from './pages/TechStack'
import NotebookPage from "./pages/NotebookPage";
import NotebookDetailPage from "./pages/NotebookDetailPage";
import ContactPage from "./pages/ContactPage";
const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/notebook" element={<NotebookPage />} />
      <Route path="/notebook/:id" element={<NotebookDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="*"
        element={
          <div className="text-red-500 p-10 text-center text-xl">
            Page not found
          </div>
        }
      />
      </Routes>
    </BrowserRouter>
  )
}

export default App