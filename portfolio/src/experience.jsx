import React from 'react';

import './App.css'
import {Howl} from "howler";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Bgmusic from "/bgmusic.mp3";
import Img from "/img.png"
import useSound from 'use-sound';

function Experience() {
     const navigate = useNavigate();
            const clickSound = new Howl({
                src:["./click.mp3"]
            })
            const [playy,{stop}]= useSound(Bgmusic,{loop:true,volume:0.3})
            useEffect(()=>{
                playy();
                return()=>stop();
    
    
            },[playy,stop])
        
            const handleClick =()=>{
              clickSound.play();
                navigate("/levels")
            }
    return ( 
        <>
        <div className="expr">
           <div className="nav">
          <h3>EXPERIENCE</h3>
          <h3 onClick={() => handleClick()} style={{cursor:"pointer"}}>X</h3>
        </div>
         <h2>Software Development Intern</h2>
         <h4>Tata Motors  </h4>
         <p>"May 2026 - June 2026"</p>
         <p>– Contributed to the Vahak Clone, a freight marketplace group project supporting Shipper, Transporter, Driver, and
Admin roles. </p>
<p>– Worked on a four-role platform with live bidding, OTP-based delivery confirmation, and a fraud detection module
built in PHP and MySQL.  </p>
<p>– Collaborated with team members on feature implementation, code reviews, and integration of payment and
dashboard workflows.</p>
<br />
         <h2>Software Development Intern</h2>
         <h4>Avijo (startup)  </h4>
         <p>"April 2026 - July 2026"</p>
         <p>– Worked directly on the production codebase, identifying and fixing real-world bugs in a live application. </p>
<p>– Raised pull requests (PRs) for bug fixes and feature improvements, participating in code review cycles with the
engineering team.</p>
<p> – Gained hands-on experience with production-grade development practices, version control workflows, and agile
collaboration.</p>

        <div className="img">
            <div className="div"></div>
            <div className="div">
                <img src={Img} alt="" />
            </div>
        </div>
        </div>
        
        </>
     );
}

export default Experience;