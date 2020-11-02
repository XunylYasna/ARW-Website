import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import gsap, { TimelineLite, Quart } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

import Banner from "../components/OrganizationTemplate/Banner"
import About from "../components/OrganizationTemplate/About"
import Events from '../components/OrganizationTemplate/OrganizationEvents'

import Layout from "../components/Layout"
import { Helmet } from "react-helmet";


export default function OrgTemplate({ pageContext }) {
    const {
        organizationName,
        acronym,
        youtubeVideoLink,
        about,
        logo,
        media,
        mission,
        vision,
        mainEvents,
        registrationPackages,
        email,
        backgroundImage,
        facebookUrl,
        twitterUrl
    } = pageContext;

    console.log(pageContext)
    console.log(about)

    const headerTimeline = new TimelineLite({
        pause: true
    });

    const aboutTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".organization-about",
            start: "center center"
        },
    })

    const mvTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".organization-vm",
            start: "top top"
        },
    })

    const eventsTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".organization-events",
            start: "bottom bottom"
        },
    })

    const registrationTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".organization-prices",
            start: "bottom bottom"
        },
    })


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        headerTimeline
            .fromTo(".organization-banner", 1, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: Quart.easeInOut })
            .fromTo(".logo", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".banner-content h1", 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
            .fromTo(".banner-content h2", 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
            .fromTo(".banner-button", 0.5, { scaleX: 0 }, { scaleX: 1, transformOrigin: "right", ease: Quart.easeInOut }, "-=0.5")
            .play()

        aboutTimeline
            .fromTo(".organization-content", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".organization-about-carousel-container", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".organization-about-socials", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

        mvTimeline
            .from(".organization-mission h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .from(".organization-vision h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .from(".organization-vm-content", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

        eventsTimeline
            .fromTo(".organization-event-container", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

        registrationTimeline
            .fromTo(".price-container", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".registration-button", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
    })




    return (
        <Layout pageName="organization">
            <Helmet>
                <title>
                    {organizationName}
                </title>
            </Helmet>

            {/*<Banner organizationName={organizationName} acronym={acronym} videoLink={youtubeVideoLink} logo={logo} background={backgroundImage} />
            <About aboutContent={about.json} acronym={acronym} media={media} facebook={facebookUrl} twitterUrl={twitterUrl} email={email}> </About>


             Vision Mission 
            <section className="organization-vm">
                <div className="organization-mission" >
                    <h2 className="align-center">Mission</h2>
                    <div className="sub-line"></div>
                    <div className="organization-vm-content">
                        {documentToReactComponents(mission.json)}
                    </div>
                </div>
                <hr className="organization-vm-divider"></hr>
                <div className="organization-vision">
                    <h2 className="align-center">Vision</h2>
                    <div className="sub-line"></div>
                    <div className="organization-vm-content">
                        {documentToReactComponents(vision.json)}
                    </div>
                </div>
            </section>

            <Events mainEvents={mainEvents} acronym={acronym} />



            {/* Prices 
            <section className="organization-prices">
                <h1 className="main-header">Registration Packages</h1>
                <div className="sub-line"></div>
                <div className="price-container">
                    {registrationPackages.map((packageItem, index) => (
                        <div key={index} class="price-item">
                            <h3>{packageItem.title}</h3>
                            <p>PHP {packageItem.price}</p>
                        </div>
                    ))}
                </div>

                <div className="registration-button">
                    <button className="event-button" href="" rel="noopener noreferrer" target="_blank">Register Now</button>
                </div>
            </section>
            */}
        </Layout>
    )
}

// export const query = graphql`
//   query($slug: String!) {
//     allContentfulOrganization(filter: { slug: { eq: $slug } }) {
//         nodes {
//             acronym
//             organizationName
//             about {
//                 json
//             }
//             youtubeVideoLink
//             backgroundImage{
//                 fluid(quality: 80, maxWidth: 900) {
//                     ...GatsbyContentfulFluid
//                 }
//             }
//             logo {
//                 title
//                 fixed(width: 128, height: 128) {
//                     ...GatsbyContentfulFixed
//                 }
//             }
//             mainEvents {
//                 eventName
//                 description {
//                     json
//                 }
//             }
//             media {
//                 fluid(quality: 80, maxWidth: 400) {
//                     ...GatsbyContentfulFluid
//                 }
//             }
//             mission {
//                 json
//             }
//             vision {
//                 json
//             }
//             registrationPackages {
//                 price
//                 title
//             }
//             email
//             facebookUrl
//             twitterUrl
//         }
//     }
//   }
// `