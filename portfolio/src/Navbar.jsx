import { useState } from "react";
import   "./App.css";

 function Navbar() {
  return (
    <nav style={{
      background: '#0a0a0f',
      borderBottom: '0.5px solid rgba(99,102,241,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      height: '52px',
      position: 'relative',
     
  


    }}>
      <span style={{ fontSize: '15px', fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em' }}>
        ZP
      </span>

      <ul style={{
        display: 'flex', gap: '2.5rem', listStyle: 'none',
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
      }}>
        {['About', 'Skills', 'Work', 'Experience', 'Contact'].map(item => (
          <li className="navLink" key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              fontSize: '11px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(180,180,210,0.55)',
              textDecoration: 'none',
            }}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a className="hire" href="#contact" style={{
        fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'rgba(180,180,210,0.7)', border: '0.5px solid rgba(180,180,210,0.4)',
        padding: '6px 18px', textDecoration: 'none',
      }}>
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar;