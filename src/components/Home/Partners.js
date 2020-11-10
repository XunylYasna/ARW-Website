import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import socials from "../../assets/constants/socials";

import Img from "gatsby-image";

const Partners = () => {
  const data = useStaticQuery(graphql`
    {
      small : allFile(filter: {relativePath: {regex: "sponsors/small/"}}) {
        nodes {
          name
          childImageSharp{
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      medium: allFile(filter: {relativePath: {regex: "sponsors/medium/"}}) {
          nodes {
            childImageSharp{
              fluid(maxWidth: 220) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
            name
          }
        }
      large: allFile(filter: {relativePath: {regex: "sponsors/large/"}}) {
        nodes {
          childImageSharp{
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          name
        }
      }
    }
  `)

  const sponsors = (data, size) => {

    return (
      <>
        {data.map((sponsor, index) => {
          return (
            <div key={index} className="sponsor-card">
              <div
                className="sponsor-image-container"
                style={{ width: `${size}`, height: `${size}` }}
              >
                <div>
                  <Img
                    fluid={sponsor.childImageSharp.fluid}
                    alt={sponsor.name}
                    className="sponsor-image"
                  />
                </div>
              </div>
              {/* <h3>{sponsor.name}</h3> */}
            </div>
          );
        })
        }
      </>
    )
  };

  return (
    <section className="partners">
      <div>
        <h1 className="sub-title">Co-Presented By:</h1>
      </div>
      <div className="sub-line"></div>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {sponsors(data.large.nodes, "250px")}
      </div>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {sponsors(data.medium.nodes, "220px")}
      </div>

      <div className="cards-container" style={{ marginBottom: `24px` }}>
        {sponsors(data.small.nodes, "150px")}
      </div>

      <div className="socials">
        <h2>Find us on:</h2>

        <div>
          <a href={socials.website} target="_blank" rel="noreferrer">
            <BiGlobe />
          </a>
          <a href={socials.facebook} target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>

          <a href={socials.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
