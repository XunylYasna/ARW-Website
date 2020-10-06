import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/cover.png";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="cover">
          <img src={img_gatsby} alt="Amar Zia Arslaan Being Artsy" />
        </p>
        <h1 className="heading">Animo La Salle!</h1>
        <p>Welcome to ARW 2020.</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
