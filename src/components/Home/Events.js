import React from "react";
import Card from "components/Card";
import { graphql, useStaticQuery } from "gatsby";

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
        <div>
          <Card>
            <h3>{eventName}</h3>
          </Card>
          <div className="event-buttons-container">
            <button>Learn More</button>
            <br />
            <button>Register</button>
          </div>
        </div>
      );
    });
  return (
    <section className="events">
      <div>
        <h1>EVENTS</h1>
      </div>

      <div className="cards-container">{eventCards}</div>
    </section>
  );
};

export default Events;
