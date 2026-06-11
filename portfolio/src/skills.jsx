

const skillGroups = {
  Frontend: [
    "React",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "PHP",
    "Python",
    "Java",
    "MERN",
  ],

  Database: [
    "MongoDB",
    "SQL",
  ],

  "Data Science": [
    "Pandas",
    "NumPy",
    "Jupyter Notebook",
  ],
};

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="particles"></div>

      <h1 className="section-title">
        SKILLS MATRIX
      </h1>

      <div className="skills-container">

        {/* LEFT SIDE */}

        <div className="skills-grid">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <div className="category-card" key={category}>
              <h2>{category}</h2>

              <div className="skills-list">
                {skills.map((skill) => (
                  <div className="skill-card" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}

        <div className="ai-core-container">

          <div className="orbit orbit1"></div>
          <div className="orbit orbit2"></div>
          <div className="orbit orbit3"></div>

          <div className="ai-core">
            <h2>16+</h2>
            <p>Technologies</p>
          </div>

        </div>

      </div>
    </section>
  );
}