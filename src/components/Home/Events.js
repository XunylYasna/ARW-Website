import React from "react";
// import Card from "components/Card";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";

const Events = () => {
  const data = useStaticQuery(graphql`
    {
      events: allFile(filter: {relativeDirectory: {eq: "Events"}}) {
        nodes {
          name
          childImageSharp{
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const eventCards = data.events.nodes
    .map((event, index) => {
      return (

        <div className="event-container" key={index}>
          <Img
            fluid={event.childImageSharp.fluid}
            alt={event.name}
            style={{
              width: `275px`
            }}
          // className="sponsor-image"
          />
          {/* <Card>
            <h3 className="sub-title" style={{ fontSize: `1.5rem` }}>
              {eventName}
            </h3>
          </Card>  */}

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
        <div className="cards-container">
          {eventCards}
        </div>
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
