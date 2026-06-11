

export default function Exp() {
  const experiences = [
    {
      company: "Tata Motors",
      role: "Software Development Intern",
      date: "May 2026 - Jun 2026",
      points: [
        "Contributed to the Vahak Clone freight marketplace project.",
        "Worked on Shipper, Transporter, Driver and Admin modules.",
        "Implemented live bidding, OTP delivery verification and fraud detection.",
        "Collaborated on dashboard workflows and payment integration."
      ]
    },
    {
      company: "Avijo",
      role: "Software Development Intern",
      date: "Apr 2026 - July 2026",
      points: [
        "Worked directly on production code.",
        "Fixed real-world bugs in a live application.",
        "Raised PRs and participated in code reviews.",
        "Learned agile workflows and production-grade development."
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="grid-overlay"></div>

      <h1 className="exp-title">
        EXPERIENCE
      </h1>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="card-header">
                <h2>{exp.company}</h2>
                <span>{exp.date}</span>
              </div>

              <h3>{exp.role}</h3>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}