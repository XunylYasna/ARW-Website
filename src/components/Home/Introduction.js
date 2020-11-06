import React from "react";
import Card from "components/Card";

const Introduction = () => {
  return (
    <>
      <section className="introduction">
        <Card
          className="project-head-letter introduction-content"
          dataSal="slide-up"
          duration="500"
          delay="100"
        >
          <h2 className="sub-title">Letter from the project heads</h2>
          <p>
            ARW has and always will be an Annual Activity that is anticipated by
            the student body. It provides an opportunity for freshmen and
            upperclassmen alike to be able to join various organizations that
            suit their interests. The exciting buzz around the campus filled
            with officers advertising their respective orgs is definitely a
            feeling to remember.
            <br />
            <br />
            Although ARW2020 will be the first - and hopefully last -
            Recruitment Week to be held online, we just want to express our
            heartfelt gratitude to all the organizations and officers that have
            contributed to making this event still possible even amidst these
            difficult times. Thank you for keeping the Lasallian light of
            student leadership burning.
            <br />
            <br />
            To all the froshies, this is your chance to grab opportunities to
            meet new people, learn new things, and discover some of the best
            moments of your life!
            <br />
            <br />
            To all the officers, thank you once again for making this possible
            and we look forward to another year of exciting events! Keep setting
            a good example of Lasallian leadership!
            <br />
            <br />
            To everyone, let’s get ready to BUILD THIS CITY!
            <br />
            <br />
            <span style={{ color: `var(--color-primary)` }}>
              #ARW2020 #ARWBuildThisCity
            </span>
            <br />
            <br />
            The ARW 2020 Project Heads
          </p>
        </Card>
      </section>
    </>
  );
};

export default Introduction;
