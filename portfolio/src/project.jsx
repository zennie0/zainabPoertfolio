import React from 'react'
import './App.css'
import {Howl} from "howler";
import { useEffect } from 'react';
import Bgmusic from "/bgmusic.mp3";
import useSound from 'use-sound';
import { useNavigate } from "react-router-dom";
function Project() {
  const navigate = useNavigate();
   const clickSound = new Howl({
                  src:["./click.mp3"]
              })
  
              const handleClick=()=>{
                  clickSound.play();
                  navigate("/levels");
              }
              const [playy,{stop}]= useSound(Bgmusic,{loop:true,volume:0.3})
                      useEffect(()=>{
                          playy();
                          return()=>stop();
              
              
                      },[playy,stop])
    return (
        <>
        <div className="project">
           <div className="nav">
               <h3>PROJECT</h3>
               <h3 onClick={()=>handleClick()} style={{cursor:"pointer"}}>X</h3>
            </div>
              <p>⭐⭐you will get the links of all projects once you will reach "bonus" level.⭐⭐</p>
            <p>i have made several projects some of them are ...</p>
            
            <br />
            <div className="basket">
              <h3>BORROW BASKET</h3>
              <p>I have made this web application using MERN stack. Borrow basket is a lending and borrowing platform that let people lend there things and earn some money.</p>
              <p>It focus on sustainable environment and reduces over production and over consuption of goods. although the project is not public yet but i am planning to do it soon. i will also be making changes in future</p>
              <h5>Technologies used</h5>
              <p><b>&#8226;</b> Javascript,</p>
                <p><b>&#8226;</b> MongoDB,</p>
               <p> <b>&#8226;</b> HTML, CSS</p>
                 <p><b>&#8226;</b> Node js</p>
                 <p><b>&#8226;</b>Bootstrap for UI</p>
                 <p><b>&#8226;</b> mongoDb atlas for cloud database</p>
                 <p><b>&#8226;</b> cloudanary for uploading images</p>
            </div>
            <br />
            <div className="weather">
              <h3>WEATHER APP</h3>
              <p>It is a react project made to get current weather of any city of the world. It is made using apis and ingrating APIs.</p>
              <h5>Technologies used</h5>
              <p><b>&#8226;</b> Javascript,</p>
              <p><b>&#8226;</b> React,</p>
                <p><b>&#8226;</b> MaterialUI,</p>
               <p> <b>&#8226;</b> weather APIs</p>
                 
                 
            </div>
            <br />
            <div className="port">
              <h3>PORTFOLIO</h3>
              <p>My portfolio website is mostly frontend and it is build using React and pure 
              CSS. This project is more like y2k vibes when website were use to be cool, i was going for that theme. i have used some react frameworks to make the website cool. like button sound effect etc.
              </p>
              <h5>Frameworks used</h5>
              <p><b>&#8226;</b> Howler,</p>
              <p><b>&#8226;</b> use-sound,</p>
               
            </div>
            <br />
            
        </div>
        </>
      );
}

export default Project;