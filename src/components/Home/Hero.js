import React from "react";

const Hero = () => (
  <section className="hero">
    <h1
      style={{
        textTransform: `uppercase`,
        textWrap: `wrap`,
        width: `500px`,
        textAlign: `center`,
      }}
    >
      Welcome to Animo City
    </h1>
    <button>Explore Map</button>
  </section>
);

export default Hero;
