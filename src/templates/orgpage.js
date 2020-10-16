import React, { useRef, useFrame, useEffect } from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image";

import Layout from "../components/Layout"
import Carousel from '../components/Carousel';

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
    
    return (
        <Layout pageName="org">
            <div data-sal="zoom-in" data-sal-delay="100" data-sal-easing="smooth" className="header">
                <div className="left">
                    {/* logo */}
                    <img className="logo" src={logo.fluid.src} alt={logo.title} />
                    {/* organization name (acronym) */}
                    <p className="title">{ organizationName }<strong>({ acronym })</strong></p>
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
                <h2>Photos</h2>
                <Carousel>
                    {/* <Img/>
                    <Img/> */}
                    {media.map((data, index) => (
                        <div key={index} >
                            <img src={data.fluid.src} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="row">
                <div className="about" >
                    <h2 className="align-center">About { acronym }</h2>
                    {about.content.map(data => 
                        data.content.map((d, index) => <p key={index}>{d.value}</p>)
                    )}
                </div>
                <div data-sal="slide-up" data-sal-delay="100" className="mission" >
                    <h2 className="align-center">Mission</h2>
                    {mission.content.map(data => data.content.map(d => {
                        let lines = d.value.split('\n');
                        console.log(lines)
                        return lines.map((line, index) => <p key={index}>{line}</p>)
                    }))}
                    <p>The La Salle Computer Society shall serve as a venue for the growth and development of its member through a three-step course of:</p>
                    <ul>
                        <li>
                            <p><strong>Purpose</strong></p>
                            <p>to know and understand the reason behind every act, decision, and endeavor pursued.</p>
                        </li>
                        <li>
                            <p><strong>Process</strong></p>
                            <p>to organize and oversee the entire procedure of every project and make sure that each goes through very necessary step towards the purpose.</p>
                        </li>
                        <li>
                            <p><strong>Excellence</strong></p>
                            <p>to accomplish our goals in the best way possible and in accordance with the ideals of the organization and of De La Salle University Manila.</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="row"> */}
                <div data-sal="slide-up" data-sal-delay="100" className="events">
                    <h2 className="align-center">Org Events</h2>
                    <Carousel>
                        {mainEvents.map((data, index) => (
                            <div key={index}>
                                <h3>{data.eventName}</h3>
                                {data.description && data.description.content.map(data => data.content.map((d, i) => <p key={i}>{d.value}</p>))}
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div data-sal="slide-up" data-sal-delay="100" className="vision right-side">
                    <h2 className="align-center">Vision</h2>
                    {vision.content.map(data => data.content.map((d, index) => <p key={index}>{d.value}</p>))}
                </div>
            {/* </div> */}
            <div data-sal="slide-up" data-sal-delay="100" className="prices">
                <h2>Prices</h2>
                {registrationPackages.map(data => <p>{data.title} - {data.price}</p>)}
            </div>
            <div data-sal="slide-up" data-sal-delay="100" className="apply-contact">
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
                    src
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
                    src
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