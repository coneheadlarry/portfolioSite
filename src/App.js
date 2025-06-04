import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import LandingPage from './components/pages/landingPage';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar animate__animated animate__bounceInDown">
            <ul>
              <li><a href="/"><FontAwesomeIcon icon={faHouse} />Home</a></li>
              <li><a href="/projects"><FontAwesomeIcon icon={faGithub} />Projects</a></li>
              <li><a href="/contact"><FontAwesomeIcon icon={faPhone} />Contact</a></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;