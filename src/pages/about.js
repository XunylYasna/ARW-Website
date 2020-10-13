import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="header-box">
        <h3>What is </h3>
        <h1>ARW 2020?</h1>
      </div>
      <div className="video-container">
        <div className="video-player-container">
          <iframe
            title="video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
        <p>Annual Recruitment Week (ARW) 2020 is a week-long University-wide event. Wherein the Council of Student Organizations (CSO) accredited organizations are given the chance to attract and recruit old and new members from the Lasallian community. It serves as a platform for these organizations to showcase who they are and what they can provide to members through their planned events. </p>
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
    </div>
  )
}

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
