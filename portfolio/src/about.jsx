import { useState } from "react";


export default function About() {
  const [openEnvelope, setOpenEnvelope] = useState(false);

  return (
    <section className="about-section" id="about">

      <h1 className="about-title">ABOUT ME</h1>

      <div className="about-container">

        <div className="profile-sphere">
          <div className="pulse-ring"></div>
          <div className="profile-core">
            ZP
          </div>
        </div>

        <div className="about-content">

          <h2>Zainab Perween</h2>

          <h3>
            Full Stack Developer • MERN Developer • Problem Solver
          </h3>

          <p>
            I am a BCA graduate passionate about building modern web
            applications and solving real-world problems through technology.
            My experience ranges from developing production-grade applications
            to creating full-stack MERN projects.

            I have worked as a Software Development Intern at Tata Motors and
            Avijo where I contributed to live products, fixed bugs,
            implemented features and collaborated within engineering teams.

            Beyond coding, I enjoy drawing and creating artwork, which helps
            me stay creative and improve my design thinking.
          </p>

          <div className="skills-grid">
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>PHP</span>
            <span>Java</span>
            <span>Python</span>
          </div>
        </div>
      </div>

      {/* Envelope */}

      <div
        className={`envelope-wrapper ${openEnvelope ? "open" : ""}`}
        onClick={() => setOpenEnvelope(!openEnvelope)}
      >

        <div className="envelope">
          <div className="letter">

            <h2>Some Of My Artwork</h2>

            <div className="art-gallery">

              <img src="/d1.jpeg" alt="" />
              <img src="/d2.jpeg" alt="" />
              <img src="/d3.jpeg" alt="" />
              <img src="/d4.jpeg" alt="" />
             
              <img src="/d6.jpeg" alt="" />
              <img src="/d7.jpeg" alt="" />

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}