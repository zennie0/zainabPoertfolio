import React from 'react';
import './App.css'
import {Howl} from "howler";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Bgmusic from "/bgmusic.mp3";
import useSound from 'use-sound';


function Hero() {
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
        <div className="hero">
        <div className="nav">
               <h3>HOME</h3>
            </div>

          <a href="#">
           <img src="./playbtn.png" className='btn' onClick={handleClick} />
           </a>
            </div>
        
        </>
    );
}

export default Hero;