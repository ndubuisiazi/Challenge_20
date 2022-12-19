import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
import Applications from './pages/Applications';

function App() {
  return (
      <Router>
        <div >
          <div>
          {<Header />}
          </div>
          <div className='flex flex-row text-center justify-center h-screen'>
          <Routes>
            <Route
              path="/Experience" 
              element={<Experience />}
            />
            <Route
              path="/Applications" 
              element={<Applications />}
            />
            <Route
              path="/Aboutme" 
              element={<Aboutme />}
            />
            <Route
              path="/Home" 
              element={<Home />}
            />
          </Routes>
          </div>
          <div>
          {<Footer />}
          </div>
        </div>
      </Router>
  );
}

export default App;
