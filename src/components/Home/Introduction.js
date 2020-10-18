import React from "react";
import landingVideo from "assets/images/ARW Landing.mp4";
import Card from "components/Card";

const Introduction = () => (
  <section className="introduction">
    <Card className="project-head-letter introduction-content">
      <h2>Letter from the project heads</h2>
    </Card>

    <div className="introduction-content">
      <video width="480" height="320" autoPlay muted loop>
        <source src={landingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export default Introduction;
