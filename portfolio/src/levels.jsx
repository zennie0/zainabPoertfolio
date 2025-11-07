import React from 'react';
import {Howl} from "howler";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Bgmusic from "/bgmusic.mp3";
import useSound from 'use-sound';

import './App.css'
function Levels() {
  const navigate = useNavigate();


      const clickSound = new Howl({
                src:["./click.mp3"]
            })

            const handleClick=(path)=>{
                clickSound.play();
                navigate(path);
            }
            const [playy,{stop}]= useSound(Bgmusic,{loop:true,volume:0.3})
                    useEffect(()=>{
                        playy();
                        return()=>stop();
            
            
                    },[playy,stop])
    return ( 
        <>
        <div className="levels">

            <div className="nav">
               <h3>LEVELS</h3>
               
               <h3 onClick={()=>handleClick("/")} style={{cursor:"pointer"}} >X</h3>
            </div>
            
            <div className="level">
                
           <img src="./aboutbtn.png" className='levelbtns'  onClick={()=>handleClick("/about")}  />
           
            </div>
            <div className="level">
                
           <img src="./projects.png" className='levelbtns'  onClick={()=>handleClick("/project")}  />
           
            </div>
            <div className="level">
                
           <img src="./skils.png" className='levelbtns'  onClick={()=>handleClick("/skills")}  />
           
            </div>
            <div className="level"> 
           <img src="./exp.png" className='levelbtns' onClick={()=>handleClick("/exp")} />
           </div>
            <div className="level">
                  
           <img src="./bonus.png" className='levelbtns'  onClick={()=>handleClick("/bonus")} />
            
            </div>

           {/* 
           
           
          
         */}
         
        </div>
        </>
     );
}

export default Levels;