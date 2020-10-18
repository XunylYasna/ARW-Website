import React, { useRef } from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import EventList from "../components/Events/EventList"

import EventLine from "../components/Events/EventLine"

import { scrollToRef } from "../components/Utilities/ScrolltoRef"

const EventsPage = () => {
    // Events
    const state = {
        events: [
            {
                id: 1,
                // img: business,
                title: "Curry Town",
                subTitle: "ARW Monday",
                content:
                    "An exclusive interview with the owner of Colonel’s Curry, Mr. Erwin Lim. This will showcase the steps and procedures on how to replicate the famous Curry that Lasallians are always craving for. The owner will also share his experiences joining organizations in La Salle and how these organizations have honed his skills and shaped him as a young entrepreneur. Catch Mr. Erwin Lim and his inspiring story on Curry Town this November 16, 2020. See you all there!",
            },
            {
                id: 2,
                // img: business,
                title: "Coffee Town",
                subTitle: "ARW Tuesday",
                content:
                    "Ano ang kwentong org mo? This is a short chat with students from De La Salle University who are active in various organizations and let them share their experiences on how these organizations molded them into becoming better leaders of tomorrow. Check their stories out this November 17, 2020.",
            },
            {
                id: 3,
                // img: business,
                title: "Cyber Arena",
                subTitle: "ARW Wednesday",
                content:
                    "To give the members of the different organizations time to bond with their co- leaders/participants through a game of testing their knowledge on the various experiences Lasallian students have as well as some facts about the organizations. Support your organization representative as he/she battles to be the ultimate Lasallian Achiever this November 18, 2020.",
            },
            {
                id: 4,
                // img: business,
                title: "ARW Award Night 2020",
                subTitle: "ARW Thursday",
                content:
                    "ARW Award Night 2020 is where the organizations are recognized for their efforts in engaging with the students of DLSU-M. The awards will focus on the organization’s way of encompassing holistic development and collective effort towards its members. Watch your organization standout towards excellence and greatness when all the stars align for ARW Award Night on November 19, 2020.",
            },
        ]
    }


    // Button scrolling behaviour
    const crossRef = useRef(null)
    const executeScroll = () => {
        scrollToRef(crossRef)
    }

    return (
        <Layout pageName="events">
            <Helmet>
                <title>Events</title>
            </Helmet>
            <section className="landing section-container">
                <h1 className="main-title"><span>Events</span></h1>
                <h2 className="sub-title">Culmination Night</h2>
                <div className="events__main-event">
                    <h3>Cross Roads</h3>
                    <div>
                        <button className="main-button" onClick={executeScroll}> Learn More</button>
                    </div>
                </div>

            </section>
            <EventLine events={state.events}></EventLine>
            <div className="main-line"></div>
            <section ref={crossRef} className="crossroads">
                <h3 className="sub-title"> Cross Roads</h3>
                <div className="sub-line"></div>
                <p>
                    An activity wherein two representatives of the different organizations will virtually hangout with the upcoming social media influencers of this generation. Having the chance to spend time with these students will be a great opportunity to bond, reminisce about their own experiences in growing, as well as offer some advice. This will help students to cultivate their talents and interests, and in the process, become better people.
                </p>
            </section>
        </Layout>
    );
};

export default EventsPage;
