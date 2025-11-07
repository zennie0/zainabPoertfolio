
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./hero.jsx"
import Levels from "./levels.jsx"
import About from "./about.jsx"
import Project from "./project.jsx"
import './App.css'

function App() {
 

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        
      </Routes>
    </Router>
  
  

  
    
    
    </>
     )
}

export default App
