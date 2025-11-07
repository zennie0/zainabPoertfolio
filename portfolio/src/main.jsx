import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Hero from "./hero.jsx"
import Levels from "./levels.jsx"
import About from "./about.jsx"
import Project from "./project.jsx"
import Skills from "./skills.jsx"
import Experience from "./experience.jsx"
import Bonus from "./bonus.jsx"

createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/exp" element={<Experience/>} />
        <Route path="/bonus" element={<Bonus/>} />
        
      </Routes>
    </Router>,
)
