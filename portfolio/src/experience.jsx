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
          <p>hey! i do full stack web development and as experience i have made several projects </p><p>that you can find attached to my resume in my portfolio projects section. </p>
          <p>as for in industry experience i have none yet. So i am activly looking for an internhip and is open to work</p>
          <br /><br /><br />
<hr />
         <p>other than that i have non technical experience</p>
         <p>i have worked as a physics and computer teacher for 2  years. </p>
         <hr />
         <p>Although I've genuinely enjoyed my teaching job, I've always known that it wasn't the career path I wanted to pursue forever. Teaching has been a meaningful experience — </p><p>it allowed me to connect with students, explain complex ideas in simple ways, and build strong communication and leadership skills. I started teaching while I was still in college, and it not only helped me become more confident and responsible but also taught me the value of patience and teamwork.

However, my true passion has always been computers, technology, and problem-solving. </p><p>I've always been fascinated by how machines work and how technology can be used to create, innovate, and make people's lives easier. As I'm now about to graduate, I feel it's the right time to take the next step and begin my journey in the tech field — something I've always been deeply excited about and truly want to grow in.</p>


 <p></p>
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