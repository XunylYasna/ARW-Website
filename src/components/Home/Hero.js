import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import landingVideo from "assets/images/ARW Landing.mp4";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Hero = () => {
  let contentRef = useRef([]);
  contentRef.current = [];
  const addToRefs = (el) => {
    if (el && !contentRef.current.includes(el)) {
      contentRef.current.push(el);
    }
  };

  useEffect(() => {
    contentRef.current[0].childNodes.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30, ease: "power4.easeOut", delay: 1 },
        { opacity: 1, y: 0, ease: "power4.easeOut", delay: 0.4*(index+1) }
      );
    });
  }, []);

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
            height: `100vh`,
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
        <div className="hero-info" ref={addToRefs}>
          <h1 className="main-title">Welcome to Animo City</h1>
          <AniLink
            cover
            direction="right"
            to="/clusters/"
            bg="#E16085"
            duration={0.7}
          >
            <button className="main-button">Explore Map</button>
          </AniLink>
        </div>
      </section>
    </>
  );
};

export default Hero;
