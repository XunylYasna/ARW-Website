import React from "react";
import landingVideo from "assets/images/ARW Landing.mp4";
import ContentCard from "./ContentCard";
import img1 from "assets/images/Clusters/ASO_(NEW_YORK).png";
const Events = () => {
  const events = ["Event 1", "Event 2"];

  const eventCards = events.map((event, index) => {
    return (
      <ContentCard
        left={index + 1 === events.length ? false : true}
        key={index}
      >
        <p>{event}</p>
        <img src={img1} alt={event} />
      </ContentCard>
    );
  });

  return (
    <section
      className="content-container parallax"
      style={{
        marginTop: `64px`,
      }}
    >
      <div
        style={{
          backgroundColor: `white`,
          width: `69%`,
          // height: `80px`,
          textAlign: `center`,
          marginBottom: `18px`,
          padding: `10px`,
        }}
      >
        <h2>Events</h2>
      </div>
      {eventCards}
    </section>
  );
};

export default Events;
