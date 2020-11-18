import React from "react";
import Container from "components/Container";

import Layout from "components/Layout";
import Hero from "components/Home/Hero";
import Introduction from "components/Home/Introduction";
import Events from "components/Home/Events";
import Partners from "components/Home/Partners";

const IndexPage = () => {
  return (
    <Layout mainName="Home" pageName="home">
      <Container>
        <Hero />
        <Introduction />
        <Events />
        <Partners />
      </Container>
    </Layout>
  );
};

export default IndexPage;
