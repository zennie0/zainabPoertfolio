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
            <h1>ZAINAB PERWEEN</h1>
            <p>
              Full Stack web developer, student, Former teacher, and some times
              artist
            </p>
          </div>
        </div>
        <br />

        <div className="hey">
          <p>hi! i'm Zainab, a web developer. i... </p>
          <br />
          <p>
            <b>&#8226;</b> create websites,
          </p>
          <p>
            <b>&#8226;</b> do full stack web development!,
          </p>
          <p>
            {" "}
            <b>&#8226;</b> teach physics,
          </p>
          <p>
            <b>&#8226;</b> like to paint
          </p>
          <br />
          interested in working with me? send an email to{" "}
          <b>zainabperween577@gmail.com</b>
        </div>
        <br />
        <div className="edu">
          <h3>EDUCATION</h3>
          <p>Bachelor of Computer Applications</p>
          <p>(JAMSHEDPUR WOMEN'S UNIVERITY 2026)</p>
        </div>
        <div className="hey">
          <h3>OTHER INTERESTS</h3>

          <p>
            <b>&#8226;</b> leetcode,
          </p>
          <p>
            <b>&#8226;</b> painting,
          </p>
          <p>
            {" "}
            <b>&#8226;</b> little bit of electronics hehe!,
          </p>

          <br />
        </div>

        <div className="edu">
          <h3>LANGUAGE PROFICIENCY</h3>
          <p>
            i can fluently speak <b>English</b> and <b>Hindi</b>
          </p>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default About;
