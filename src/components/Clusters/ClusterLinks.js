import React, { useEffect } from "react";
import { TimelineLite, Quart } from "gsap";
import { graphql, useStaticQuery } from "gatsby";
import mainMap from "assets/images/Clusters/MAIN_MAP.jpg";
import img1 from "assets/images/Clusters/ASO_(NEW_YORK).png";
const ClusterLinks = () => {
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

  console.log(data.allContentfulCluster.nodes);

  const clusters = data.allContentfulCluster.nodes.map(
    ({ title, subtitle, contentful_id }, index) => {
      return (
        <div
          className="grid-item sub-title "
          style={{
            backgroundImage: `url(${mainMap})`,
          }}
          key={contentful_id}
        >
          <p>{title}</p>
        </div>
      );
    }
  );

  return (
    <>
      <section
        className="cluster-links"
        style={{
          backgroundColor: `var(--color-primary)`,
        }}
      >
        <div className="grid-container">{clusters}</div>
      </section>
    </>
  );
};

export default ClusterLinks;
