import React from "react";
// import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import ClusterLinks from "components/Clusters/ClusterLinks";

const ProjectsPage = () => {
  return (
    <Layout mainName="Clusters" pageName="clusters">
      <Container>
        <ClusterLinks />
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
