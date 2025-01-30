import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
import { BrowserRouter as Router, Routes, Route } from 'react-router/dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
