import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import socials from "../../assets/constants/socials";

import Img from "gatsby-image";
const Partners = () => {
  const data = useStaticQuery(graphql`
    {
      small: allFile(filter: { relativeDirectory: { eq: "sponsors/small" } }) {
        nodes {
          name
        }
      }
      medium: allFile(
        filter: { relativeDirectory: { eq: "sponsors/medium" } }
      ) {
        nodes {
          name
        }
      }
      large: allFile(filter: { relativeDirectory: { eq: "sponsors/large" } }) {
        nodes {
          name
        }
      }
    }
  `);
  // console.log(large);

  const sponsors = (data, size) => {
    console.log(data);
    data.map((sponsor, index) => {
      // console.log()
      return (
        <div key={index}>
          <div
            className="sponsor-image-container"
            style={{ width: { size }, height: { size } }}
          >
            {/* <Img
          fixed={sponsor.name.childImageSharp.fixed}
          alt={name}
          style={{ width: `128px` }}
        /> */}
          </div>
          <h3>{sponsor.name}</h3>
        </div>
      );
    });
  };
  // const mediumSponsors = sponsorData.medium.map(({ name, img_size }, index) => {
  //   return (
  //     <div key={index}>
  //       {/* <Img fixed={medium[index].childImageSharp.fixed} alt={name} /> */}
  //       <img
  //         src={medium[index].childImageSharp.fixed.src}
  //         style={{ width: img_size }}
  //       />
  //       <h3>{name}</h3>
  //     </div>
  //   );
  // });

  // const smallSponsors = sponsorData.small.map(({ name, img_size }, index) => {
  //   return (
  //     <div key={index}>
  //       {/* <Img fixed={small[index].childImageSharp.fixed} alt={name} /> */}
  //       <img
  //         src={small[index].childImageSharp.fixed.src}
  //         style={{ width: img_size }}
  //       />
  //       <h3>{name}</h3>
  //     </div>
  //   );
  // });

  return (
    <section className="partners">
      <div>
        <h1 className="sub-title">Co-Presented By:</h1>
      </div>
      <div className="sub-line"></div>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {sponsors(data.large.nodes, "250px")}
        {/* {largeSponsors} */}
      </div>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {/* {mediumSponsors} */}
      </div>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {/* {smallSponsors} */}
      </div>

      <div className="socials">
        <h2>Find us on:</h2>

        <div>
          <a href={socials.website} target="_blank">
            <BiGlobe />
          </a>
          <a href={socials.facebook} target="_blank">
            <FaFacebookSquare />
          </a>

          <a href={socials.instagram} target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
