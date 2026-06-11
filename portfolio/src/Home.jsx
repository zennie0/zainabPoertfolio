import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Project from './project';
import Hero from './hero';
import Contact from './Contact';
import Galaxy from './Galaxy';

import Exp from './Exp';
import About from './About';
function Home() {
    return ( <>
   <nav><Navbar/></nav>
 <Galaxy/>
<section id="hero">

<Hero/>
</section>

<section id="skills">

<Skills/>
</section>
<section id="work">
  <div className="section-title ph1"><h2 >PROJECTS</h2></div>

<Project/>
</section>
<section id="experience">

<Exp/>
</section>
<section id="about">

<About/>
</section>
<section id="contact">

<Contact/>
</section>
    

  
  
 
  </> );
}

export default Home;