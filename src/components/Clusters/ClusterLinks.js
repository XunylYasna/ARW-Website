import React, { useEffect } from "react";
import { TimelineLite } from "gsap";
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
      .fromTo(".cluster-page-title", 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

      .play();
  }, []);
  
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
      subtitle:
        "Alliance of Professional Organizations of Business and Economics",
      image: aspireImg,
    },
    {
      title: data.allContentfulCluster.nodes[1].title,
      subtitle: "Alliance of Special Interest and Socio-Civic Organizations",
      image: probeImg,
    },
    {
      title: data.allContentfulCluster.nodes[2].title,
      subtitle: "College of Liberal Arts Professional Organizations",
      image: cap12Img,
    },
    {
      title: data.allContentfulCluster.nodes[3].title,
      subtitle: "Engineering Alliance Geared Towards Excellence",
      image: asoImg,
    },
    {
      title: data.allContentfulCluster.nodes[4].title,
      subtitle: "Alliance of Science Organizations",
      image: engageImg,
    },
    {
      title: "CSO",
      subtitle: "Council of Student Organizations",
      image: mainMap,
    },
  ];


  const clusters = clusterData.map(({ title, image, subtitle }, index) => {
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
          to={`${title === "CSO"
              ? "/organizations/council-of-student-organizations"
              : `/clusters/${title}`
            }`}
        >
          <div>
            <div>
              <p className="sub-title cluster-title">{title}</p>
              <p className="sub-title cluster-subtitle">{subtitle}</p>
              <AniLink
                className="event-button"
                to={`${
                  title === "CSO"
                    ? "/organizations/council-of-student-organizations"
                    : `/clusters/${title}`
                }`}
              >
                Learn More
              </AniLink>
            </div>
          </div>
        </AniLink>
      </div>
    );
  });

  return (
    <>
      <section
        className="cluster-links"
        style={{ backgroundImage: `url(${mainMap})` }}
      >
        <h1 className="main-title cluster-page-title">Welcome to Animo City</h1>

        <div className="grid-container">{clusters}</div>
      </section>
    </>
  );
};

export default ClusterLinks;
