import React from "react";

import Layout from "components/Layout";
import Container from "components/Container";

const ContactPage = () => {
  return (
    <Layout mainName="Contact" pageName="contact">
      <Container>
        <section>
          <h2 className="sub-title">Contact Us</h2>
          <div className="sub-line"></div>
          <div className="form-container">
            <form method="post" action="/" data-netlify="true" name="contact">
              <label>
                <p>Name</p>
                <input type="text" name="name" id="name" required />
              </label>
              <br />
              <label>
                <p>Email</p>

                <input type="email" name="email" id="email" required />
              </label>
              <br />

              <label>
                <p>Subject</p>

                <input type="text" name="subject" id="subject" />
              </label>
              <br />

              <label>
                <p>Message</p>

                <textarea name="message" id="message" rows="5" required />
              </label>
              <br />

              {/* <input type="reset" value="Clear" className="main-button" /> */}
              <button className="main-button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* <h1>Contact</h1>
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
        </div> */}
      </Container>
    </Layout>
  );
};

export default ContactPage;
