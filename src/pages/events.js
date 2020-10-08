import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const EventsPage = () => {
    return (
        <Layout pageName="event">
            <Helmet>
                <title>Event</title>
            </Helmet>
            <Container>
                <h1>Events</h1>
                <p>Add events here</p>
            </Container>
        </Layout>
    );
};

export default EventsPage;
