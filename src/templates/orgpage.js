import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image";
import gsap, { TimelineLite, Quart } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

import Layout from "../components/Layout"
import Carousel from '../components/Carousel';
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger)

export default function OrgPage({ data }) {
    const {
        organizationName,
        acronym,
        about,
        logo,
        media,
        mission,
        vision,
        mainEvents,
        registrationPackages,
        email,
        facebookUrl,
        twitterUrl,
        youtubeVideoLink
    } = data.allContentfulOrganization.nodes[0];

    // extract the youtube id form the original youtube link 
    const youtubeId = youtubeVideoLink.substring('https://www.youtube.com/watch?v='.length, youtubeVideoLink.length).split('&')[0]

    const headerTimeline = new TimelineLite({
        pause: true
    });

    const photosTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".photos",
            start: "center center"
        },
    })

    const contentsTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".about",
            start: "center center"
        },
    })

    const pricesTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".mission",
            start: "top top"
        },
    })

    const buttons = new TimelineLite({
        scrollTrigger: {
            trigger: ".vision",
            start: "top top"
        },
    })


    useEffect(() => {
        headerTimeline
            .fromTo(".header", 1, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: Quart.easeInOut })
            .fromTo(".logo", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .fromTo(".title", 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
            .fromTo(".video", 0.5, { scaleX: 0 }, { scaleX: 1, transformOrigin: "right", ease: Quart.easeInOut }, "-=0.5")
            .play()

        gsap.from(".photos h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
    })

    photosTimeline
        .fromTo(".photos h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .fromTo(".photos .carousel", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

    contentsTimeline
        .fromTo(".about", 1, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: Quart.easeInOut })
        .from(".about h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .fromTo(".vision", 1, { scaleX: 0 }, { scaleX: 1, transformOrigin: "right", ease: Quart.easeInOut }, "-=1")
        .from(".mission h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .from(".vision h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .from(".events h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .fromTo(".about p", 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(".mission p", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
        .fromTo(".vision p", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
        .fromTo(".events p", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")

    pricesTimeline
        .from(".prices h2", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .from(".price-item", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "+=0.25")


    buttons
        .from(".apply-contact", 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })

    return (
        <Layout pageName="org">
            <Helmet>
                <title>
                    {organizationName}
                </title>
            </Helmet>
            <div className="header">
                <div className="left">
                    {/* logo */}
                    <div>
                        <Img className="logo" fluid={logo.fluid} />
                    </div>
                    {/* organization name (acronym) */}
                    <div className="title"><span>{organizationName}<strong>({acronym})</strong></span></div>
                </div>
                <div className="right">
                    <iframe
                        className="video"
                        src={"https://www.youtube.com/embed/" + youtubeId}
                        title={acronym + " Promotional Video"}
                        allow="accelerometer; aucenterlay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="photos">
                <h2>Photos</h2>
                <div className="sub-line"></div>
                <Carousel className="carousel" items={3} style={{ textAlign: "center" }}>
                    {media.map((data, index) => (
                        <Img key={index} draggable={false} className="photo-image" fluid={data.fluid} />
                    ))}
                </Carousel>
            </div>
            <div className="content">
                <div className="about" >
                    <h2 className="align-center">About {acronym}</h2>
                    <div className="sub-line"></div>
                    {about.content.map(data =>
                        data.content.map((d, index) => <p key={index}>{d.value}</p>)
                    )}
                </div>
                <div className="mission" >
                    <h2 className="align-center">Mission</h2>
                    <div className="sub-line"></div>
                    {mission.content.map(data => data.content.map((d, index) => <p key={index}>{d.value}</p>))}
                </div>
                <div className="events">
                    <h2 className="align-center">Org Events</h2>
                    <div className="sub-line"></div>
                    <Carousel items={1}>
                        {mainEvents.map((data, index) => (
                            <div key={index}>
                                <h3>{data.eventName}</h3>
                                {data.description && data.description.content.map(data => data.content.map((d, i) => <p key={i}>{d.value}</p>))}
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="vision right-side">
                    <h2 className="align-center">Vision</h2>
                    <div className="sub-line"></div>
                    {vision.content.map(data => data.content.map((d, index) => <p key={index}>{d.value}</p>))}
                </div>
            </div>
            <div className="prices">
                <h2 >Prices</h2>
                <div className="sub-line"></div>
                <div className="price-grid">
                    {registrationPackages.map((data, index) => (
                        <div class="price-item" style={{ marginLeft: "40px" }}>
                            <div className="position">{data.title}</div>
                            <div className="position-price">PHP {data.price}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="apply-contact">
                <a href="" rel="noopener noreferrer" target="_blank"><span>Apply Now</span></a>
                <a href={"mailto:/" + email} rel="noopener noreferrer" target="_blank"><span>Contact {acronym}</span></a>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allContentfulOrganization(filter: { slug: { eq: $slug } }) {
        nodes {
            acronym
            organizationName
            about {
                content {
                    content {
                        value
                    }
                }
            }
            logo {
                title
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
            mainEvents {
                eventName
                description {
                    content {
                        content {
                            value
                        }
                    }
                }
            }
            media {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
            mission {
                content {
                    content {
                        value
                    }
                }
            }
            vision {
                content {
                    content {
                        value
                    }
                }
            }
            registrationPackages {
                price
                title
            }
            email
            facebookUrl
            twitterUrl
            youtubeVideoLink
        }
    }
  }
`