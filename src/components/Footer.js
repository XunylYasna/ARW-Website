import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import mail from "assets/images/SVG/mail.svg";
import dribbble from "assets/images/SVG/dribbble.svg";
import insta from "assets/images/SVG/instagram.svg";

import Container from "components/Container";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      <Container>
        {/* add author's name in footer by uncommenting the following line*/}
        {/* <p>Made by by {data.site.siteMetadata.author} using Gatsby</p> */}
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          using Gatsby.
        </p>
        <div className="footer__icons">
          <a
            href="https://dlsu-cso.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${dribbble.id}`} />
            </svg>
          </a>

          <a href="mailto:cso@dlsu.edu.ph" rel="noopener noreferrer">
            <svg className="footer__icons-item">
              <use xlinkHref={`#${mail.id}`} />
            </svg>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${insta.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
