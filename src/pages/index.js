import React from "react";
import Helmet from "react-helmet";
import Container from "components/Container";

import Layout from "components/Layout";
import Hero from "components/Home/Hero";
import Introduction from "components/Home/Introduction";
import Events from "components/Home/Events";
import Partners from "components/Home/Partners";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <Hero />
        <Introduction />
        <Events />
        {/* <Partners /> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
