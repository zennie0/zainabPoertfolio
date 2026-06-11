import React from 'react'
import Galaxy from "./Galaxy"
function Hero() {
    return ( <div className="hero"  >
   
      {/* <div className="stars"></div> */}
      <div className="stars stars-1"></div>
<div className="stars stars-2"></div>
<div className="stars stars-3"></div>

      <div className="hero-content">
        <p className="hero-tag">
          FULL STACK • MERN • CREATIVE DEV
        </p>

        <div className="title-wrapper">
          <h1 className="outline">ZAINAB</h1>
          <h1 className="main-title">ZAINAB</h1>

          <h2 className="outline second">PERWEEN</h2>
          <h2 className="sub-title">PERWEEN</h2>
        </div>

        <p className="description">
          Building immersive <span>web experiences</span> — code that
          performs, designs that last.
        </p>

        
      </div>

    </div> );
}

export default Hero;