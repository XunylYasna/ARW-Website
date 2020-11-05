import React from "react";
import Card from "components/Card";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import sponsorData from "../../data/sponsors.json";
import Img from "gatsby-image";
const Partners = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
        nodes {
          childImageSharp {
            fixed(width: 120) {
              ...GatsbyImageSharpFixed
            }
            id
          }
        }
      }
    }
  `);
  // console.log(large);
  const large = data.allFile.nodes.filter((props) => {
    return props.childImageSharp.fixed.src.includes("large");
  });
  const medium = data.allFile.nodes.filter((props) => {
    return props.childImageSharp.fixed.src.includes("medium");
  });
  const small = data.allFile.nodes.filter((props) => {
    return props.childImageSharp.fixed.src.includes("small");
  });
  console.log(small);
  console.log(medium);
  console.log(large);

  const largeSponsors = sponsorData.large.map(({ name, img }, index) => {
    // console.log(index);
    return (
      <div>
        {/* <Img fixed={large.allFile.nodes[index].childImageSharp.fixed} /> */}
        <img src={large[index].childImageSharp.fixed.src} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  });

  const mediumSponsors = sponsorData.medium.map(({ name, img }, index) => {
    // console.log(index);
    return (
      <div>
        {/* <Img fixed={medium.allFile.nodes[index].childImageSharp.fixed} /> */}
        <img src={medium[index].childImageSharp.fixed.src} alt={name} />

        <h3>{name}</h3>
      </div>
    );
  });

  const smallSponsors = sponsorData.small.map(({ name, img }, index) => {
    // console.log(index);

    return (
      <div>
        <img src={small[index].childImageSharp.fixed.src} alt={name} />

        <h3>{name}</h3>
      </div>
    );
  });

  return (
    <section className="partners">
      <div>
        <h1 className="sub-title">Co-Presented By:</h1>
      </div>
      <div className="sub-line"></div>

      <h1
        className="sub-title"
        style={{ fontSize: `2rem`, paddingTop: `36px`, paddingBottom: `24px` }}
      >
        Large Sponsors
      </h1>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {largeSponsors}
      </div>
      <h1
        className="sub-title"
        style={{ fontSize: `2rem`, paddingTop: `36px`, paddingBottom: `24px` }}
      >
        Medium Sponsors
      </h1>
      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {mediumSponsors}
      </div>
      <h1
        className="sub-title"
        style={{ fontSize: `2rem`, paddingTop: `36px`, paddingBottom: `24px` }}
      >
        Small Sponsors
      </h1>
      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {smallSponsors}
      </div>

      <div className="socials">
        <p>Find us on:</p>

        <span>
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitterSquare />
          </a>
        </span>
        <br />
        <a>CSO Website</a>
      </div>
    </section>
  );
};

export default Partners;
