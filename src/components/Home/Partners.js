import React from "react";
import Card from "components/Card";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMainEvents {
        nodes {
          eventName
          slug
        }
      }
    }
  `);

  const eventCards = data.allContentfulMainEvents.nodes
    .slice(0, 3)
    .map(({ eventName, slug }) => {
      return (
        <div>
          <Card style={{ height: `200px` }}>
            <h3>{eventName}</h3>
          </Card>
        </div>
      );
    });
  return (
    <section className="partners">
      <div>
        <h1 className="sub-title">Co-Presented By:</h1>
      </div>
      <div className="sub-line"></div>

      <div className="cards-container">{eventCards}</div>
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
