import React, { useEffect } from "react";
import { TimelineLite } from "gsap";
import landingVideo from "assets/images/ARW Landing.mp4";

const Hero = () => {
  const headerTimeline = new TimelineLite({ paused: true });

  useEffect(() => {
    headerTimeline
      .fromTo(".main-title", 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
      .fromTo(".main-button", 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

      .play();
  });
  return (
    <>
      <section
        className="hero"
        style={{
          position: `relative`,
          height: `100vh`,
          marginTop: `-15px`,
        }}
      >
        <video
          style={{
            position: `absolute`,
            objectFit: `cover`,
            // right: `0`,
            top: `2%`,
            height: `750px`,
            width: `100%`,
            // width: `100%`,
            // minHeight: `100%`,
          }}
          autoPlay
          muted
          loop
        >
          <source src={landingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-info">
          <h1 className="main-title">Welcome to Animo City</h1>
          <button className="main-button">Explore Map</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
