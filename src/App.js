import React from 'react'; // Essential import to use JSX and React features.
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import SubmissionSuccess from './Components/SubmissionSuccess';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS for responsive layout and styles.
import './App.css'; // Custom CSS for additional styling.

function App() {
  return (
    <Router> {/* Enables client-side routing in the app (without full page reload). */}
      <div>
        <nav className="navbar navbar-expand-lg custom-navbar"> {/* Bootstrap navigation bar with a custom class. */}
          <div className="container-fluid">
            {/* Link component to navigate to the home route. */}
            <Link className="navbar-brand" to="/"><b>Jhonna Acebo</b></Link>
            <div>
              <ul className="navbar-nav ms-auto">
                {/* Navigation links to different pages using the 'to' attribute. */}
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5"> {/* Bootstrap container for spacing and layout. */}
          <Routes> {/* Defines different routes for the app. Each route renders the respective component. */}
            <Route path="/" element={<div></div>} /> {/* Default empty route (home page). */}
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
