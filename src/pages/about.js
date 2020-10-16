import React, { useRef, useState, useEffect } from "react";
import Helmet from "react-helmet";
import { gsap } from "gsap";

import Card from "components/Card";
import Layout from "components/Layout";
import Container from "components/Container";
import LayersItem from "components/LayersItem";

import Img1 from "../assets/images/ARW2019Photos/1.jpg";
import Img2 from "../assets/images/ARW2019Photos/1.jpg";
import Img3 from "../assets/images/ARW2019Photos/1.jpg";
import Img4 from "../assets/images/ARW2019Photos/1.jpg";
import Img5 from "../assets/images/ARW2019Photos/1.jpg";
import Img6 from "../assets/images/ARW2019Photos/1.jpg";
import Img7 from "../assets/images/ARW2019Photos/1.jpg";

// import icon from "../assets/images/SVG/floatingisland.svg"

const VideoSection = () => {
  let imgRef = useRef([]);
  const [tl] = useState(gsap.timeline());

  useEffect(() => {
    console.log(imgRef);
    for (let i = 0, len = 7; i <= len - 1; ++i) {
      tl.to(
        imgRef.current[i],
        {
          duration: 1,
          ease: "Power2.easeInOut",
          y: 0,
        },
        0.15 * i
      );
    }
  }, [tl]);

  return (
    <div className="video-section">
      {/* <svg>
        <use xlinkHref={`#${icon.id}`} />
      </svg> */}
      <div className="header-box">
        <span>What is </span>
        <br />
        <h1>ARW 2020?</h1>
      </div>
      {/* <div className="video-container">
        <div className="video-player-container">
          <iframe
            title="video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
      <div className="layers">
        <LayersItem path={Img1} ref={(element) => imgRef.current.push(element)} />
        <LayersItem path={Img2} ref={(element) => imgRef.current.push(element)} />
        <LayersItem path={Img3} ref={(element) => imgRef.current.push(element)} />
        <LayersItem path={Img4} ref={(element) => imgRef.current.push(element)} />
        <LayersItem path={Img5} ref={(element) => imgRef.current.push(element)} />
        <LayersItem path={Img6} ref={(element) => imgRef.current.push(element)} />
        <LayersItem path={Img7} ref={(element) => imgRef.current.push(element)} />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="header-box">
        <h1>About ARW</h1>
        <p>
          Annual Recruitment Week (ARW) 2020 is a week-long University-wide
          event. Wherein the Council of Student Organizations (CSO) accredited
          organizations are given the chance to attract and recruit old and new
          members from the Lasallian community. It serves as a platform for
          these organizations to showcase who they are and what they can provide
          to members through their planned events.{" "}
        </p>
      </div>
    </div>
  );
};

const PHeadsSection = () => {
  return (
    <div className="project-heads-section">
      <div className="header-box">
        <h1>Project Heads</h1>
      </div>
      <div className="project-heads-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About ARW 2020</title>
      </Helmet>
      <Container>
        <VideoSection />
        <AboutSection />
        <PHeadsSection />
      </Container>
    </Layout>
  );
};

export default AboutPage;
