import React, { useEffect } from "react"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { gsap, TimelineLite, Quart } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Banner from "../components/OrganizationTemplate/Banner"
import About from "../components/OrganizationTemplate/About"
import Events from '../components/OrganizationTemplate/OrganizationEvents'

import Layout from "../components/Layout"
import { Helmet } from "react-helmet";

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
}
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
    } = pageContext.data.organization;


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
            start: "center center"
        },
    })

    const eventsTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".organization-events",
            start: "center center"
        },
    })

    const registrationTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".organization-prices",
            start: "center center"
        },
    })


    useEffect(() => {

        headerTimeline
            .fromTo(".organization-banner", 1, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: Quart.easeInOut })
            .fromTo(".logo", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".banner-content h1", 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
            .fromTo(".banner-button", 0.5, { scaleX: 0 }, { scaleX: 1, transformOrigin: "right", ease: Quart.easeInOut }, "-=0.5")
            .play()

        aboutTimeline
            .fromTo(".organization-content", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".organization-about-carousel-container", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".organization-about-socials", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

        mvTimeline
            .fromTo(".organization-mission h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".organization-vision h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".organization-vm-content", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

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

            <Banner organizationName={organizationName} acronym={acronym} videoLink={youtubeVideoLink} logo={logo} background={backgroundImage} />
            <About aboutContent={about.json} acronym={acronym} media={media} facebook={facebookUrl} twitterUrl={twitterUrl} email={email}> </About>


            {/* Vision Mission  */}
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



            {/* Prices  */}
            <section className="organization-prices">
                <h1 className="main-header">Registration Packages</h1>
                <div className="sub-line"></div>
                <div className="price-container">
                    {registrationPackages.map((packageItem, index) => (
                        <div key={index + 100} className="price-item">
                            <h3>{packageItem.title}</h3>

                            <p>{packageItem.price === 0 ? 'FREE' : `Php ${packageItem.price}`}</p>
                        </div>
                    ))}
                </div>

                <div className="registration-button">
                    <button className="event-button" href="" rel="noopener noreferrer" target="_blank">Register Coming Soon</button>
                </div>
            </section>

        </Layout>
    )
}
