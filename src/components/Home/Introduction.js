import React from "react";
import landingVideo from "assets/images/ARW Landing.mp4";

const Introduction = () => {
  return (
    <section className="content-container parallax">
      <div
        className="content-card"
        style={{
          marginRight: `16px`,
        }}
      >
        <p>LETTER FROM THE PROJECT HEADS</p>
      </div>
      <div className="content-card">
        <video width="320" height="240" autoPlay muted loop>
          <source src={landingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Introduction;
