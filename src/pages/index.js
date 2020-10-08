import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

// import img_gatsby from "assets/images/cover.png";
import landingVideo from "assets/images/ARW Landing.mp4"

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="cover">
          {/* <img src={img_gatsby} alt="Amar Zia Arslaan Being Artsy" /> */}
          <video width="320" height="240" autoPlay muted loop>
            <source src={landingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </p>
        <h1 className="heading">Animo La Salle!</h1>
        <p>Welcome to ARW 2020.</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
