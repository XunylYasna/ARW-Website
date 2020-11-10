import React, { useEffect, useRef } from "react";
// import Card from "components/Card";
import { gsap } from "gsap";
import mainMap from "assets/images/Clusters/MAIN_MAP.jpg";

const Hero = () => {
  let ref = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30, ease: "power4.easeOut" },
      { opacity: 1, y: 0, ease: "power4.easeOut", delay: 0.4 }
    );
  }, []);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${mainMap})` }}>
        <div ref={(e) => (ref.current[0] = e)}>
          <h1 className="main-title">Welcome to Animo City</h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
