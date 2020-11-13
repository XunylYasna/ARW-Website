import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import Hero from "components/Clusters/Hero";
import ClusterList from "components/Clusters/ClusterList";
import ClusterLinks from "components/Clusters/ClusterLinks";

const ProjectsPage = () => {
  return (
    <Layout pageName="clusters">
      <Helmet>
        <title>Clusters</title>
      </Helmet>
      <Container>
        <ClusterLinks />
        {/* <ClusterList /> */}
        {/* <Hero /> */}
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
