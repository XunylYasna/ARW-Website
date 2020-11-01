import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "components/Layout";
import Container from "components/Container";
import Hero from "components/Clusters/Hero";
import ClusterList from "components/Clusters/ClusterList";
import ClusterLinks from "components/Clusters/ClusterLinks";

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCluster {
        nodes {
          title
          subtitle
          contentful_id
        }
      }
    }
  `);

  return (
    <Layout pageName="clusters">
      <Helmet>
        <title>Clusters</title>
      </Helmet>
      <Container>
        <Hero />
        <ClusterList />
        <ClusterLinks />
        {/* <h1>Clusters</h1> */}
        {/* <ol>
          {data.allContentfulCluster.nodes.map((node) => {
            return (
              <li key={node.contentfulId}>
                <AniLink
                  cover
                  direction="down"
                  to={`/${node.title}/`}
                  bg="#fccd04"
                  duration={0.5}
                >
                  <div className="project-card">
                    <h2>{node.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                    <p>{edge.node.frontmatter.type}</p>
                  </div>
                </AniLink>
              </li>
            );
          })}
        </ol> */}
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
