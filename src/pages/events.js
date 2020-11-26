import React, { useRef } from "react";
// import Helmet from "react-helmet";

import Layout from "components/Layout";
import EventLine from "../components/Events/EventLine"
import BackgroundImage from 'gatsby-background-image'

import { ScrollToRef } from "../components/Utilities/ScrolltoRef"
import { graphql, useStaticQuery } from "gatsby";


const EventsPage = () => {

    const data = useStaticQuery(graphql`
    {
        crossRoad: allFile(filter: {relativePath: {eq: "Backgrounds/CROSS ROADS BG.png"}}) {
            nodes {
              name
                childImageSharp{
                    fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }

        curry: allFile(filter: {relativePath: {eq: "Events/Curry Town.png"}}) {
            nodes {
              name
                childImageSharp{
                    fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }

        cyber: allFile(filter: {relativePath: {eq: "Events/cyber arena.png"}}) {
            nodes {
              name
                childImageSharp{
                    fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }

        coffee: allFile(filter: {relativePath: {eq: "Events/Coffee Town .png"}}) {
            nodes {
              name
                childImageSharp{
                    fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }

        career: allFile(filter: {relativePath: {eq: "Events/CAREER CENTER.png"}}) {
            nodes {
              name
                childImageSharp{
                    fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }

        awards: allFile(filter: {relativePath: {eq: "Events/awards night.png"}}) {
            nodes {
              name
                childImageSharp{
                    fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }`);

    // Events
    const state = {
        events: [
            {
                id: 1,
                img: data.curry.nodes[0],
                title: "Curry Town",
                subTitle: "ARW Monday",
                content:
                    "An exclusive interview with the owner of Colonel’s Curry, Mr. Erwin Lim. This will showcase the steps and procedures on how to replicate the famous Curry that Lasallians are always craving for. The owner will also share his experiences joining organizations in La Salle and how these organizations have honed his skills and shaped him as a young entrepreneur. Catch Mr. Erwin Lim and his inspiring story on Curry Town this November 23, 2020. See you all there!",
            },
            {
                id: 2,
                img: data.coffee.nodes[0],
                title: "Coffee Town",
                subTitle: "ARW Tuesday",
                content:
                    "Ano ang kwentong org mo? This is a short chat with students from De La Salle University who are active in various organizations and let them share their experiences on how these organizations molded them into becoming better leaders of tomorrow. Check their stories out this November 24, 2020.",
            },
            {
                id: 3,
                img: data.cyber.nodes[0],
                title: "Cyber Arena",
                subTitle: "ARW Wednesday",
                content:
                    "To give the members of the different organizations time to bond with their co- leaders/participants through a game of testing their knowledge on the various experiences Lasallian students have as well as some facts about the organizations. Support your organization representative as he/she battles to be the ultimate Lasallian Achiever this November 25, 2020.",
            },
            {
                id: 4,
                img: data.career.nodes[0],
                title: "Career Center",
                subTitle: "ARW Thursday",
                content:
                    "ARW Career Center is a webinar that will focus on the career opportunities, lessons, and knowledge that student organizations can teach us in our lives as Lasallian Graduates. The guest speaker will be Aliki Siao, who is a former Behavioral Therapist, and is currently taking up her Master’s degree. So what are you waiting for? Catch her in ARW Career Center on November 26, 2020.",
            },
            {
                id: 5,
                img: data.awards.nodes[0],
                title: "ARW 2020: Awards Night",
                subTitle: "ARW Friday",
                content:
                    "ARW Award Night 2020 is where the organizations are recognized for their efforts in engaging with the students of DLSU-M. The awards will focus on the organization’s way of encompassing holistic development and collective effort towards its members. Watch your organization standout towards excellence and greatness when all the stars align for ARW Award Night on November 19, 2020.",
            },
        ]
    }


    // Button scrolling behaviour
    const crossRef = useRef(null)
    const executeScroll = () => {
        ScrollToRef(crossRef)
    }

    return (
        <Layout mainName="Events" pageName="events">
            <section className="landing section-container">
                <h1 className="main-title"><span>Events</span></h1>
                <h2 className="sub-title">Culmination Event</h2>
                <BackgroundImage className="events__main-event" fluid={data.crossRoad.nodes[0].childImageSharp.fluid}>
                    <h3>Crossroads</h3>
                    <div>
                        <button className="main-button" onClick={executeScroll}>Learn More</button>
                    </div>
                </BackgroundImage>

            </section>
            <EventLine events={state.events}></EventLine>
            <div className="main-line"></div>
            <section ref={crossRef} className="crossroads">
                <h3 className="sub-title"> Crossroads</h3>
                <div className="sub-line"></div>
                <p>
                    An activity wherein two representatives of the different organizations will virtually hangout with the upcoming social media influencers of this generation. Having the chance to spend time with these students will be a great opportunity to bond, reminisce about their own experiences in growing, as well as offer some advice. This will help students to cultivate their talents and interests, and in the process, become better people.
                </p>
                <div style={{
                    display: 'flex'
                }}>
                    <a className="event-button" rel="noopener noreferrer" href="https://youtu.be/YWyWuOHgVUc" target="_blank" style={{
                            textDecoration: 'none',
                            color: 'var(--color-primary)',
                            margin: 'auto',
                            display: 'block'
                        }}>Watch the Video</a>
                </div>
            </section>
        </Layout>
    );
};

export default EventsPage;
