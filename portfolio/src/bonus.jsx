import React from 'react'
import { Howl } from "howler";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Bgmusic from "/bgmusic.mp3";
import useSound from "use-sound";
import "./App.css";



function Bonus() {
    const navigate = useNavigate();
      const clickSound = new Howl({
        src: ["./click.mp3"],
      });
    
      const handleClick = () => {
        clickSound.play();
        navigate("/levels");
      };
    
      const [playy, { stop }] = useSound(Bgmusic, { loop: true, volume: 0.3 });
      useEffect(() => {
        playy();
        return () => stop();
      }, [playy, stop]);
    return ( 
        <>
        <div className="bonus">
             <div className="nav">
          <h3>BONUS</h3>
          <h3 onClick={() => handleClick()} style={{cursor:"pointer"}}>X</h3>
        </div>

        <div className="contact">
            <h2>CONTACT</h2>
            <br />
            <div className="img">
                <a   onClick={()=>clickSound.play()} href="https://www.linkedin.com/in/zainab-perween-37a0312aa/">
                    <img src="./imgin.jpeg" alt="" /><br />linkedin
                </a>
                <a  onClick={()=>clickSound.play()}  href="mailto:zainabperween577@gmail.com">
                    <img src="./imgemail.jpeg" alt="" />
                    <br />Email
                </a>
                <a  onClick={()=>clickSound.play()}  href="https://github.com/zennie0">
                    <img src="./git.jpeg" alt="" /><br />
                    Github
                </a>
                <a  onClick={()=>clickSound.play()}  href="https://www.instagram.com/blair._bz?igsh=ZnpzNXp3enBzZTVx">
                    <img src="./insta.jpeg" alt="" />
                    <br />Instagram
                </a>
                <a  onClick={()=>clickSound.play()}  href="https://youtube.com/@zen-f2l6u?si=EVAA7GEEwE4LAcsx">
                    <img src="./ytimg.jpeg" alt="" />
                    <br />Youtube
                </a>
                
            </div>
        </div>
        <br />
        <hr />
        <div className="projectlink">

            <h2>PROJECT LINKS</h2>
            <br />
            <div className="img">
                <a  onClick={()=>clickSound.play()}  href="https://borrow-basket.onrender.com/listings" >
                    <img src="./basimg.jpeg" alt="" /><br />Borrowbasket
                </a>
                <a  onClick={()=>clickSound.play()}  href="https://weather-app-oihn.onrender.com/">
                    <img src="./wetimg.jpeg" alt="" /><br />Weather app
                </a>
                <a  onClick={()=>clickSound.play()}  href="https://zainabpoertfolio.onrender.com">
                    <img src="./portimg.jpeg" alt="" /><br />Portfolio
                </a>
            </div>
        </div>
        </div>
        </>
     );
}

export default Bonus;
// somthing