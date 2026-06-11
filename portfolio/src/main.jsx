import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Loader from './loader.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<App/>} />
       
      </Routes>
    </Router>,
)
