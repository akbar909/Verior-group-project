import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bookshelf from './pages/Bookshelf';
import TechStack from './pages/TechStack';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <nav className="bg-gray-900 px-4 py-4 flex gap-6">
          <Link to="/" className="hover:text-gray-400">Bookshelf</Link>
          <Link to="/tech" className="hover:text-gray-400">Tech Stack</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Bookshelf />} />
          <Route path="/tech" element={<TechStack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
