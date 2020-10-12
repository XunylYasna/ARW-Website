import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const Video = () => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
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
        <Video></Video>
        <h1>About</h1>
        <p>Add information about you!</p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
