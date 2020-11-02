import React, { useEffect } from "react";
import { TimelineLite, Quart } from "gsap";
import { graphql, useStaticQuery } from "gatsby";

const ClusterList = () => {
  const headerTimeline = new TimelineLite({ paused: true });

  useEffect(() => {
    headerTimeline
      .fromTo(".main-title", 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
      .fromTo(".main-button", 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

      .play();
  });
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

  const clusters = data.allContentfulCluster.nodes.map(
    ({ title, subtitle, contentful_id }) => {
      return <p key={contentful_id}>{title}</p>;
    }
  );

  return (
    <>
      <section
        className="cluster-list"
        style={{ backgroundColor: `var(--color-primary)` }}
      >
        <div className="cluster-container">{clusters}</div>
      </section>
    </>
  );
};

export default ClusterList;
