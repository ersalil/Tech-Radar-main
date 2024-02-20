function Rings({ hoveredQuadrant, quadrant, type }) {
  if (type === "left") {
    return (
      <div
        className={`left-rings rings ${
          hoveredQuadrant === quadrant ? "active" : ""
        }`}
      >
        <p className="lrt1">Hold</p>
        <p className="lrt2">Assess</p>
        <p className="lrt3">Trial</p>
        <p className="lrt4">Adopt</p>
      </div>
    );
  } else {
    return (
      <div
        className={`right-rings ${
          hoveredQuadrant === "q2" || hoveredQuadrant === "q4" ? "active" : ""
        }`}
      >
        <p className="rrt1">Adopt</p>
        <p className="rrt2">Trial</p>
        <p className="rrt3">Assess</p>
        <p className="rrt4">Hold</p>
      </div>
    );
  }
}

export default Rings;
