import "./App.css";

 function Galaxy() {
  const stars = Array.from({ length: 250 });

  return (
    <div className="galaxy-container">
      <div className="galaxy-core"></div>

      <div className="galaxy galaxy-1">
        {stars.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              "--x": `${Math.random() * 100}%`,
              "--y": `${Math.random() * 100}%`,
              "--size": `${Math.random() * 3 + 1}px`,
              "--delay": `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="galaxy galaxy-2">
        {stars.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              "--x": `${Math.random() * 100}%`,
              "--y": `${Math.random() * 100}%`,
              "--size": `${Math.random() * 2 + 1}px`,
              "--delay": `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Galaxy;