import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import Hero from "components/Home/Hero";
import Introduction from "components/Home/Introduction";
// import img_gatsby from "assets/images/cover.png";

const IndexPage = () => {
  return (
    <>
      <Layout pageName="home">
        <Helmet>
          <title>Home Page</title>
        </Helmet>

        <Container>
          <Hero />
          <Introduction />
          <Introduction />
          <Introduction />
        </Container>
      </Layout>
      {/* </div> */}
      {/* <div class="parallax"></div> */}
    </>
  );
};

export default IndexPage;
