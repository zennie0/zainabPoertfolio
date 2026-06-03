import React from 'react'
import {useEffect} from "react"
import {Howl} from "howler";
import useSound from "use-sound";
import hoverSound from "/hoversound.mp3"
import './App.css'
import { useNavigate } from "react-router-dom";


function Skills() {

    const[play,{stop}]= useSound (hoverSound,{volume:0.5})
    
    const navigate = useNavigate();
   const clickSound = new Howl({
                  src:["./click.mp3"]
              })
  
              const handleClick=()=>{
                  clickSound.play();
                  navigate("/levels");
              }
              useEffect(()=>{
                return()=>{
                    stop();
                }
              },[stop])
    return ( 
        <>
        <div className="skills">
             <div className="nav">
               <h3>SKILLS</h3>
               <h3 onClick={()=>handleClick()} style={{cursor:"pointer"}}>X</h3>
            </div>
            <br />
            <h3>LANGUAGES</h3>
            <div className="development">
                <div className="bt" onMouseEnter={play}>JavaScript</div>
                <div className="bt"  onMouseEnter={play}>Java</div>
                <div className="bt"  onMouseEnter={play}>Python</div>
                <div className="bt"  onMouseEnter={play}>PHP</div>
                <div className="bt"  onMouseEnter={play}>HTML</div>
                <div className="bt"  onMouseEnter={play}>CSS</div>
            </div>
            <br />
            <h3>DEVELOPMENT</h3>
            <div className="development">
                <div className="bt"  onMouseEnter={play}>React.js</div>
                <div className="bt"  onMouseEnter={play}>Next.js</div>
                <div className="bt"  onMouseEnter={play}>BootStrap</div>
                <div className="bt"  onMouseEnter={play}>TailwindCSS</div>
                 <div className="bt"  onMouseEnter={play}>Node.js</div>
                <div className="bt"  onMouseEnter={play}>Express.js</div>
                <div className="bt"  onMouseEnter={play}>RESTful APIs</div>
               <div className="bt"  onMouseEnter={play}>MongoDB</div>
                <div className="bt"  onMouseEnter={play}>SQL</div>
                
            </div>
            <br />
            
            <h3>Data & Analytics</h3>
            <div className="development">
                <div className="bt"  onMouseEnter={play}>Pandas</div>
                <div className="bt"  onMouseEnter={play}>Numpy</div>
                <div className="bt"  onMouseEnter={play}>Web Scraping</div>
                <div className="bt"  onMouseEnter={play}>Jupyter Lab</div>
    
            </div>
            <br />
            <h3>Cloud & DevOps</h3>
            <div className="development">
                <div className="bt"  onMouseEnter={play}>AWS (S3)</div>
                <div className="bt"  onMouseEnter={play}>Cloudinary</div>
                <div className="bt"  onMouseEnter={play}>Git</div>
                <div className="bt"  onMouseEnter={play}>GitHub</div>
    
            </div>
            <br />
            <h3>Concepts</h3>
            <div className="development">
                <div className="bt"  onMouseEnter={play}>MERN Stack</div>
                <div className="bt"  onMouseEnter={play}>MVC Architechture</div>
             
    
            </div>

            <div className="img">
                <div className="div"></div>
                <div className="div">
                    <img src="./imgsk.png" alt="" />
                </div>
            </div>
          <p>  ⭐⭐click or hover to hear magic of memories⭐⭐</p>
        </div>
        </>
     );
}

export default Skills;