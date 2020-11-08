import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import socials from "../assets/constants/socials";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      csoLogo: allFile(
        filter: { relativePath: { eq: "Logos/CSO Logo - White.png" } }
      ) {
        nodes {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }

      arwLogo: allFile(filter: { relativePath: { eq: "Logos/ARW-Logo.png" } }) {
        nodes {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <div className="footer-left">
        {/* <div className="footer-div">
          <h1>ARW 2020</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/clusters">Clusters</Link></li>
            <li><Link to="/organizations">Organizations</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div> */}
        <div className="footer-div">
          <h1>Connect With Us</h1>
          <div className="footer-connect-icons">
            <a rel="noreferrer" href={socials.website} target="_blank">
              <BiGlobe />
              {""}
            </a>
            <a rel="noreferrer" href={socials.facebook} target="_blank">
              <FaFacebookSquare />
              {""}
            </a>
            {/* <a href={socials.twitter} target="_blank"><FaTwitterSquare /></a> */}
            <a rel="noreferrer" href={socials.instagram} target="_blank">
              <FaInstagram />
              {""}
            </a>
          </div>
          <div className="footer-connect-content">
            <a
              rel="noreferrer"
              href={"mailto: " + socials.email}
              target="_blank"
            >
              {" "}
              <AiOutlineMail /> cso@dlsu.edu.ph
            </a>
            <p>
              {" "}
              <AiOutlinePhone /> Local 744
            </p>
            <p>
              {" "}
              <FaMapMarkedAlt /> 4th Floor, Bro. Connon Hall, SPS Building, De
              La Salle University
            </p>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-logos">
          {/* <div className="cso-logo"> */}
          <Img fixed={data.csoLogo.nodes[0].childImageSharp.fixed}></Img>
          {/* </div> */}
          {/* <div className="arw-logo"> */}
          <Img fixed={data.arwLogo.nodes[0].childImageSharp.fixed}></Img>
          {/* </div> */}
        </div>
        <div className="footer-text"></div>
      </div>
    </footer>
  );
};

export default Footer;
