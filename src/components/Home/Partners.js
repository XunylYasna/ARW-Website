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
            fixed(width: 240) {
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
        img_size: "140px",
      },
      {
        name: "Evian",
        img_size: "130px",
      },

      {
        name: "Federated",
        img_size: "160px",
      },
      {
        name: "Culture Blends",
        img_size: "130px",
      },

      {
        name: "Act II",
        img_size: "140px",
      },
    ],
    medium: [{ name: "Franchise Manila", img_size: "145px" }],
    small: [
      {
        name: "Archers Network",
        img_size: "100px",
      },
      {
        name: "Course Hero",
        img_size: "100px",
      },
      {
        name: "Colonel's Curry",
        img_size: "90px",
      },
      {
        name: "Menji",
        img_size: "100px",
      },
      {
        name: "Mystery Manila",
        img_size: "90px",
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

  const largeSponsors = sponsorData.large.map(({ name, img_size }, index) => {
    return (
      <div key={index}>
        {/* <Img
          fixed={large[index].childImageSharp.fixed}
          alt={name}
          style={{ width: `128px` }}
        /> */}
        <img
          src={large[index].childImageSharp.fixed.src}
          style={{ width: img_size }}
        />
        <h3>{name}</h3>
      </div>
    );
  });

  const mediumSponsors = sponsorData.medium.map(({ name, img_size }, index) => {
    return (
      <div key={index}>
        {/* <Img fixed={medium[index].childImageSharp.fixed} alt={name} /> */}
        <img
          src={medium[index].childImageSharp.fixed.src}
          style={{ width: img_size }}
        />
        <h3>{name}</h3>
      </div>
    );
  });

  const smallSponsors = sponsorData.small.map(({ name, img_size }, index) => {
    return (
      <div key={index}>
        {/* <Img fixed={small[index].childImageSharp.fixed} alt={name} /> */}
        <img
          src={small[index].childImageSharp.fixed.src}
          style={{ width: img_size }}
        />
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

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {largeSponsors}
      </div>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {mediumSponsors}
      </div>

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

          <a href={socials.instagram} target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Partners;
