import React from "react";
import Card from "components/Card";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Events = () => {
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
        <div className="event-container">
          <Card>
            <h3 className="sub-title" style={{ fontSize: `1.5rem` }}>
              {eventName}
            </h3>
          </Card>
          {/* <div className="event-buttons-container">
            <a
              href="#"
              className="event-button"
              style={{
                textDecoration: `none`,
                color: `var(--color-primary)`,
                marginTop: `18px`,
              }}
            >
              Register
            </a>
          </div> */}
        </div>
      );
    });
  return (
    <>
      <section
        className="events"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-delay="100"
      >
        <h1 className="sub-title">EVENTS</h1>
        <div className="sub-line"></div>

        <div className="cards-container">{eventCards}</div>
        <AniLink
          to="/events/"
          className="event-button"
          style={{
            textDecoration: `none`,
            color: `var(--color-primary)`,
            marginTop: `48px`,
          }}
          cover
          direction="right"
          to="/events/"
          bg="#E16085"
          duration={0.7}
        >
          Learn More
        </AniLink>
      </section>
      <div className="main-line"></div>
    </>
  );
};

export default Events;
