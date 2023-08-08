import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/nav/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { About } from './pages/about/about'
import { Contact } from './pages/contact/contact';
import { Play } from './pages/play/play'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Play />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/play' element={<Play />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
