import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import mail from "assets/images/SVG/mail.svg";
import dribbble from "assets/images/SVG/dribbble.svg";
import insta from "assets/images/SVG/instagram.svg";

const ContactPage = () => {
  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <h1>Contact</h1>
        <p>Let's get in touch!</p>
        <div className="contact__icon">
          <a
            href="https://dlsu-cso.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${dribbble.id}`} />
            </svg>
          </a>

          <a href="mailto:cso@dlsu.edu.ph" rel="noopener noreferrer">
            <svg className="contact__icon-item">
              <use xlinkHref={`#${mail.id}`} />
            </svg>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${insta.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
