import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import SubmissionSuccess from './Components/SubmissionSuccess';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#BA8E23'}}>
          <div className="container-fluid">
          <Link className="navbar-brand" to="/"><b>My Profile</b></Link>
            <div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home" style={{color: 'black'}}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={{color: 'black'}}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills" style={{color: 'black'}}>Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" style={{color: 'black'}}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submission-success" element={<SubmissionSuccess />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;