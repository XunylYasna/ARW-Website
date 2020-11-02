import React, { useEffect } from "react";
import Card from "components/Card";
import { TimelineLite, Quart } from "gsap";
import mainMap from "assets/images/Clusters/MAIN_MAP.jpg";

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
      <section className="hero" style={{ backgroundImage: `url(${mainMap})` }}>
        <div>
          <h1 className="main-title">Welcome to Animo City</h1>
        </div>
      </section>
    </>
  );
};

export default Hero;