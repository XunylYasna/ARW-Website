import React, { useEffect } from "react";
import { TimelineLite, Quart } from "gsap";
import { graphql, useStaticQuery } from "gatsby";
// import img1 from "assets/images/Clusters/ASO_(NEW_YORK).png";
import mainMap from "assets/images/Clusters/MAIN_MAP.jpg";
import asoImg from "../../assets/images/Clusters/ASO.png";
import aspireImg from "../../assets/images/Clusters/ASPIRE.png";
import cap12Img from "../../assets/images/Clusters/CAP12.png";
import engageImg from "../../assets/images/Clusters/ENGAGE.png";
import probeImg from "../../assets/images/Clusters/PROBE.png";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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

  const clusterData = [
    {
      title: data.allContentfulCluster.nodes[0].title,
      image: aspireImg,
    },
    {
      title: data.allContentfulCluster.nodes[1].title,
      image: probeImg,
    },
    {
      title: data.allContentfulCluster.nodes[2].title,
      image: cap12Img,
    },
    {
      title: data.allContentfulCluster.nodes[3].title,
      image: asoImg,
    },
    {
      title: data.allContentfulCluster.nodes[4].title,
      image: engageImg,
    },
    {
      title: "CSO",
      image: mainMap,
    },
  ];

  console.log(data.allContentfulCluster.nodes);

  const clusters = clusterData.map(({ title, image }, index) => {
    return (
      <div
        className="grid-item"
        style={{
          // backgroundImage: `url(${image})`,
          backgroundColor: `#97ca99a4`,
        }}
        key={index}
      >
        <AniLink
          to={`${
            title === "CSO"
              ? "/organizations/council-of-student-organizations"
              : `/clusters/${title}`
          }`}
        >
          <div>
            <p className="sub-title">{title}</p>
          </div>
        </AniLink>
      </div>
    );
  });

  return (
    <>
      <section className="cluster-links">
        <div className="grid-container">{clusters}</div>
      </section>
    </>
  );
};

export default ClusterLinks;
