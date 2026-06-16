// Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Pacman",
    image: "/pacmanimg.jpg",
    tech: ["Html", "CSS", "Javascript"],
    description:"An arcade game pacman",
    link:"https://pacman-beta-drab.vercel.app/"
  },
  {
    id: 2,
    title: "Kosowa",
    image: "/kosowa.jpg",
    tech: ["React", "MERN"],
    description:"A collaborative story writting app",
    link:"https://kosowa.vercel.app/"
  },
  {
    id: 3,
    title: "Version Control",
    image: "/gh.jpg",
    tech: ["MERN", "AWS"],
    description:"Github clone",
    link:"https://github.com/zennie0/version-control"
  },
  {
    id: 4,
    title: "Borrow Basket",
    image: "/bb.jpg",
    tech: ["JS", "MongoDB","Express"],
    description:"A borrowing and lending platform.",
    link:"https://borrow-basket.onrender.com/listings"
  },
  {
    id: 5,
    title: "Weather App",
    image: "/weather.jpg",
    tech: ["JS", "HTML","CSS"],
    description:"Weather prediction app",
    link:"https://weather-app-oihn.onrender.com/"
  },
];

export default function Project() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects-section">
        
      <div className="projects-track">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-card ${
              hovered && hovered !== project.id ? "dim" : ""
            }`}
            onHoverStart={() => setHovered(project.id)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{
              scale: 1.15,
              y: -40,
              zIndex: 100,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="card-content">
              <span className="project-number">
                {String(project.id).padStart(2, "0")}
              </span>

              <h2>{project.title}</h2>

              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-des">
                <p>{project.description}</p>
              </div>

              <button><a target="_blank"  href={project.link}  style={{textDecoration:"none", color:"white"}}>Project Link</a></button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}