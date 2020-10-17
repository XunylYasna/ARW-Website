import React, { useRef, useState, useEffect } from "react";
import Helmet from "react-helmet";
import { gsap } from "gsap";

import Card from "components/Card";
import Layout from "components/Layout";
import Container from "components/Container";

import Img1 from "../assets/images/ARW2019Photos/1.jpg";
import Img2 from "../assets/images/ARW2019Photos/2.jpg";
import Img3 from "../assets/images/ARW2019Photos/3.jpg";
import Img4 from "../assets/images/ARW2019Photos/4.jpg";
import Img5 from "../assets/images/ARW2019Photos/5.jpg";
import Img6 from "../assets/images/ARW2019Photos/6.jpg";
import Img7 from "../assets/images/ARW2019Photos/7.jpg";

// import icon from "../assets/images/SVG/floatingisland.svg"

const VideoSection = () => {
  let ref = useRef(null);

  useEffect(() => {
    const tl = new gsap.timeline();
    const len = 7;
    
    for (let i = 0; i <= len - 1; ++i) {
      tl.to(
        [ref.children[i], ref.children[i].children],
        {
          duration: 1,
          ease: "Power2.easeInOut",
          y: 0,
        },
        0.15 * i
      );
    }

    for (let i = 0, len = 6; i <= len - 1; ++i) {
      tl.to(
        [ref.children[i], ref.children[i].children],
        {
          duration: 1,
          ease: "Power2.easeInOut",
          display: "none",
        },
        0.15 * i
      );
    }

    tl.to([ref.children[len-1], ref.children[len-1].children], {
      duration: 1,
      ease: 'Expo.easeInOut',
      y: (index) => index ? '101%' : '-101%'
  })

  }, []);



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
      <div className="layers" ref={e => ref = e}>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img1 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img2 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img3 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img4 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img5 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img6 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img7 + ")" }}
          />
        </div>
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
