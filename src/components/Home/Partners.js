import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import socials from "../../assets/constants/socials";

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
  const sponsorData = {
    large: [
      {
        name: "Ceres",
      },
      {
        name: "Federated",
      },

      {
        name: "Evian",
      },
      {
        name: "Culture Blends",
      },

      {
        name: "Act II",
      },
    ],
    medium: [{ name: "Franchise Manila" }],
    small: [
      {
        name: "Archers Network",
      },
      {
        name: "Course Hero",
      },
      {
        name: "Colonel's Curry",
      },
      {
        name: "Menji",
      },
      {
        name: "Mystery Manila",
      },
    ],
  };

  // const largeSponsors = sponsorData.large.map(({name}) =>{

  // })
  const large = data.allFile.nodes.filter((props) => {
    return props.childImageSharp.fixed.src.includes("large");
  });
  const medium = data.allFile.nodes.filter((props) => {
    return props.childImageSharp.fixed.src.includes("medium");
  });
  const small = data.allFile.nodes.filter((props) => {
    return props.childImageSharp.fixed.src.includes("small");
  });

  const largeSponsors = sponsorData.large.map(({ name }, index) => {
    return (
      <div key={index}>
        <Img fixed={large[index].childImageSharp.fixed} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  });

  const mediumSponsors = sponsorData.medium.map(({ name }, index) => {
    return (
      <div key={index}>
        <Img fixed={medium[index].childImageSharp.fixed} alt={name} />

        <h3>{name}</h3>
      </div>
    );
  });

  const smallSponsors = sponsorData.small.map(({ name }, index) => {
    return (
      <div key={index}>
        <Img fixed={small[index].childImageSharp.fixed} alt={name} />
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
          <a href={socials.website} target="_blank">
            <BiGlobe />
          </a>
          <a href={socials.facebook} target="_blank">
            <FaFacebookSquare />
          </a>
          <a href={socials.twitter} target="_blank">
            <FaTwitterSquare />
          </a>
          <a href={socials.instagram} target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Partners;
