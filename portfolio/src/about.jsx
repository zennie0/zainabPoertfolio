import React from "react";
import Pfp from "/pfp.jpeg";
import { Howl } from "howler";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Bgmusic from "/bgmusic.mp3";
import useSound from "use-sound";
import "./App.css";
function About() {
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
      <div className="about">
        <div className="nav">
          <h3>ABOUT</h3>
          <h3 onClick={() => handleClick()} style={{cursor:"pointer"}}>X</h3>
        </div>
        <div className="intro">
          <img src={Pfp} alt="" />
          <div className="introo">
            <h1>Zainab Perween</h1>
            <p>
             Full-Stack Developer · BCA '26 · Jamshedpur
            </p>
          </div>
        </div>
        <br />

       <p>I'm a final-year BCA student and full-stack developer who loves building real things — not just running them locally. From collaborative storytelling platforms to a custom Git version control system built from scratch, my projects tend to involve problems I find genuinely interesting and solutions I actually want to use.</p>
       <p>My stack centers on the MERN ecosystem — MongoDB, Express, React, and Node — with additional experience in Python, PHP, and cloud tools like AWS S3. I care a lot about clean architecture, and I've been lucky enough to test that in real production environments through internships at Avijo and Tata Motors.</p>
       
       
       
      
        
        <br />
      </div>
    </>
  );
}

export default About;
