import React from "react";
import landingVideo from "assets/images/ARW Landing.mp4";

const Introduction = () => (
  <section className="intro parallax">
    <div className="letter">
      <p>LETTER FROM THE PROJECT HEADS</p>
    </div>
    <div className="intro-video">
      <video width="320" height="240" autoPlay muted loop>
        <source src={landingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export default Introduction;
