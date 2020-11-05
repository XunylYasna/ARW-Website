import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Container from "components/Container";

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    headerLogo : allFile(filter: {relativePath: {eq: "Logos/ARW2020.PNG"}}) {
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
            <AniLink cover to="/" bg="#6666ff" duration={0.7}>
              Home
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/about/"
              bg="#E16085"
              duration={0.7}
            >
              About
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink cover to="/clusters/" bg="#fccd04" duration={0.7}>
              Clusters
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/organizations/"
              bg="#00d9ff"
              duration={0.7}
            >
              Organizations
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/events/"
              bg="#E16085"
              duration={0.7}
            >
              Events
            </AniLink>
          </li>
          <li>|</li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/contact/"
              bg="#00d9ff"
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
            <AniLink cover to="/" bg="#6666ff" duration={0.7}>
              Home
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/about/"
              bg="#E16085"
              duration={0.7}
            >
              About
            </AniLink>
          </li>
          <li>
            <AniLink cover to="/clusters/" bg="#fccd04" duration={0.7}>
              Clusters
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/organizations/"
              bg="#00d9ff"
              duration={0.7}
            >
              Organizations
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/events/"
              bg="#E16085"
              duration={0.7}
            >
              Events
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/contact/"
              bg="#00d9ff"
              duration={0.7}
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
