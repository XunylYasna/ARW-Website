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

  const clusterData = [
    {
      title: data.allContentfulCluster.nodes[0].title,
    },
    {
      title: data.allContentfulCluster.nodes[1].title,
    },
    {
      title: data.allContentfulCluster.nodes[2].title,
    },
    {
      title: data.allContentfulCluster.nodes[3].title,
    },
    {
      title: data.allContentfulCluster.nodes[4].title,
    },
    {
      title: "CSO",
    },
  ];

  const clusters = clusterData.map(({ title }, index) => {
    return <p key={index}>{title}</p>;
  });

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
