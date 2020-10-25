import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image";
import { TimelineLite, Quart } from "gsap";

import Layout from "../components/Layout"
import Carousel from '../components/Carousel';
import { Helmet } from "react-helmet";

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
        twitterUrl 
    } = data.allContentfulOrganization.nodes[0];

    const headerTimeline = new TimelineLite({paused: true});

    useEffect(() => {
        headerTimeline
            .fromTo(".header", 1, {scaleX: 0}, {scaleX: 1, transformOrigin:"left", ease: Quart.easeInOut})
            .fromTo(".logo", 0.5, {opacity: 0, y: 30}, {opacity: 1, y: 0})
            .fromTo(".title", 0.5, {opacity: 0, y: -30}, {opacity: 1, y: 0}, "-=0.5")
            .fromTo(".video", 0.5, {scaleX: 0}, {scaleX: 1, transformOrigin:"right", ease: Quart.easeInOut}, "-=0.5")
            .play()
    })

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
                    <div className="title"><span>{ organizationName }<strong>({ acronym })</strong></span></div>
                </div>
                <div className="right">
                    <iframe
                        className="video"
                        src={"https://www.youtube.com/embed/Dz6Sg630I8M"}
                        // title={videoTitle}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="photos">
                <h2 data-sal="slide-up" data-sal-duration="500">Photos</h2>
                <Carousel data-sal="slide-up" data-sal-duration="500" data-sal-delay="100" items={3} style={{textAlign: "center"}}>
                    {media.map((data, index) => (
                        <img key={index} draggable={false} src={data.fluid.src} />
                    ))}
                </Carousel>
            </div>
            <div className="content">
                <div className="about" >
                    <h2 data-sal="slide-up" data-sal-duration="500" className="align-center">About { acronym }</h2>
                    {about.content.map(data => 
                        data.content.map((d, index) => <p data-sal="slide-up" data-sal-duration="500" data-sal-delay={index * 100} key={index}>{d.value}</p>)
                    )}
                </div>
                <div className="mission" >
                    <h2 className="align-center">Mission</h2>
                    {mission.content.map(data => data.content.map((d, index) => <p data-sal="slide-up" data-sal-duration="500" data-sal-delay={index * 100} key={index}>{d.value}</p>))}
                </div>
                <div className="events">
                    <h2 className="align-center">Org Events</h2>
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
                    <h2 data-sal="slide-up" data-sal-duration="500"className="align-center">Vision</h2>
                    {vision.content.map(data => data.content.map((d, index) => <p data-sal="slide-up" data-sal-duration="500" data-sal-delay={index * 100} key={index}>{d.value}</p>))}
                </div>
            </div>
            <div className="prices">
                <h2 data-sal="slide-up" data-sal-duration="500" data-sal-delay="100" >Prices</h2>
                <div className="price-grid">
                    {registrationPackages.map((data, index) => (
                        <div data-sal="slide-up" data-sal-duration="500" data-sal-delay={index * 100} style={{marginLeft: "40px"}}>
                            <div className="position">{data.title}</div>
                            <div className="position-price">PHP {data.price}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="apply-contact">
                <a data-sal="slide-up" data-sal-duration="500" data-sal-delay="100" href="" rel="noopener noreferrer" target="_blank"><span>Apply Now</span></a>
                <a data-sal="slide-up" data-sal-duration="500" data-sal-delay="100" href={"mailto:/" + email} rel="noopener noreferrer" target="_blank"><span>Contact {acronym}</span></a>
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
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
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
                    base64
                    tracedSVG
                    src
                    srcWebp
                    srcSetWebp
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
        }
    }
  }
`