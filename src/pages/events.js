import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import EventList from "../components/Events/EventList"

import EventLine from "../components/Events/EventLine"

const EventsPage = () => {

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
                        <button className="main-button"> Learn More</button>
                    </div>
                </div>

            </section>
            <EventLine events={state.events}></EventLine>
            <div className="main-line"></div>
            <section id="crossroads" className="crossroads">
                <h3 className="sub-title"> Cross Roads</h3>
                <div className="sub-line"></div>
                <p>
                    Kombucha vice 8-bit raw denim, taxidermy synth chia bushwick. Butcher street art taiyaki master cleanse drinking vinegar helvetica shoreditch, biodiesel enamel pin single-origin coffee yuccie glossier four dollar toast. PBR&B kinfolk artisan vegan scenester, ennui you probably haven't heard of them tacos pour-over kale chips gentrify fanny pack raw denim twee. Gastropub blue bottle waistcoat biodiesel craft beer scenester literally franzen man bun kogi knausgaard lumbersexual wolf pop-up. Next level cold-pressed sartorial seitan, mixtape semiotics sriracha meditation gastropub cray. Taxidermy af keffiyeh pickled.
                </p>
            </section>
        </Layout>
    );
};

export default EventsPage;
