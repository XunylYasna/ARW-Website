import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import EventList from "../components/Events/EventList"

const EventsPage = () => {
    return (
        <Layout pageName="event">
            <Helmet>
                <title>Event</title>
            </Helmet>
            <section>
                <h1>Events</h1>
            </section>
            <EventList></EventList>
        </Layout>
    );
};

export default EventsPage;
