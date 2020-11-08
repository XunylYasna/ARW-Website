import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Container from "components/Container";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      headerLogo: allFile(
        filter: { relativePath: { eq: "Logos/ARW2020.PNG" } }
      ) {
        nodes {
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const [visible, setVisible] = useState(false);

  return (
    <header>
      <Container>
        {/* <p>ARW 2020</p> */}
        <div className="logo-box">
          {/* <img src={ARWLogo} height="100px" /> */}
          <Img fixed={data.headerLogo.nodes[0].childImageSharp.fixed}></Img>
          {/* <img src={ARWLogo2} height="100px" /> */}
        </div>

        {/* <ARWLogo></ARWLogo> */}
        {/* uncomment the line below to add your name in the header */}
        {/* <p>{data.site.siteMetadata.author}</p> */}

        <div
          className={`hamburger ${visible ? "change" : ""}`}
          onClick={() =>
            visible === true ? setVisible(false) : setVisible(true)
          }
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className="sub-title">
          <li>
            <AniLink
              paintDrip
              direction="up"
              to="/"
              color="green"
              duration={0.7}
            >
              Home
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              paintDrip
              direction="right"
              to="/about/"
              color="green"
              duration={0.7}
            >
              About
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              paintDrip
              to="/clusters/"
              direction="left"
              color="green"
              duration={0.7}
            >
              Clusters
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              paintDrip
              direction="right"
              to="/organizations/"
              color="green"
              duration={0.7}
            >
              Organizations
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              paintDrip
              direction="right"
              to="/events/"
              color="green"
              duration={0.7}
            >
              Events
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              paintDrip
              direction="right"
              to="/contact/"
              color="green"
              duration={0.7}
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </Container>
      <div className={`vertical-nav ${visible ? "" : "hidden"}`}>
        <ul className="sub-title">
          <li>
            <AniLink to="/">Home</AniLink>
          </li>
          <li>
            <AniLink to="/about/">About</AniLink>
          </li>
          <li>
            <AniLink to="/clusters/">Clusters</AniLink>
          </li>
          <li>
            <AniLink to="/organizations/">Organizations</AniLink>
          </li>
          <li>
            <AniLink to="/events/">Events</AniLink>
          </li>
          <li>
            <AniLink to="/contact/">Contact</AniLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
