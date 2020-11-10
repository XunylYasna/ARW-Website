import React, { useEffect } from "react"
import Helmet from "react-helmet";

import { graphql } from "gatsby"
import { gsap, TimelineLite } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import Minimap from "../components/Minimap";
import Card from "../components/Card";
// import { aso, asoPositions, aspire, aspirePositions, cap12, cap12Positions, cso, csoPositions, engage, engagePositions, probe, probePositions } from "./buildings"

// gsap.registerPlugin(ScrollTrigger)

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ClusterPage({ data }) {

    const organizationsTimeline = new TimelineLite({
        scrollTrigger: {
            trigger: ".organization-list",
            start: "top top",
            end: "bottom top"
        },
    })



    useEffect(() => {
        organizationsTimeline
            .staggerFromTo(".organization-list .sub-line", 0.5, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left" })
            .staggerFromTo(".organization-list .main-header", 0.5, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
            .staggerFromTo(".list .item-container", 0.5, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
    })

    const { landingImage, title, subtitle, buildingSize, organizations } = data.allContentfulCluster.nodes[0]
    return (
        <Layout pageName="cluster" mainName={title} >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="organization-header">
                <p className="main-header">{subtitle}(<strong>{title}</strong>)</p>
            </div>
            {/* <Minimap minimap={landingImage.fluid.src} buildings={aspire} positions={aspirePositions} /> */}
            <Minimap minimap={landingImage.fluid.src} buildingSize={buildingSize} organizations={organizations} />
            <div className="organization-list">
                <h1 className="main-header" >Organizations under {title}</h1>
                <div className="sub-line" />
                <div className="list">
                    {organizations ? organizations.map((org, index) => {
                        return (
                            <div key={index} className="item-container" >
                                <Card className="item" >
                                    <AniLink
                                        cover
                                        to={'/organizations/' + org.slug}
                                        bg="#6666ff"
                                        duration={0.7}
                                        className="header-link"
                                    >
                                        <div className="org-item">
                                            <img className="org-logo" draggable={false} src={org.logo.fluid.src} alt={org.acronym + " Logo"} />
                                            <h1 className="sub-title">{org.organizationName}(<strong>{org.acronym}</strong>)</h1>
                                        </div>
                                    </AniLink>
                                </Card>
                            </div>
                        )
                    }) : <div></div>}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($title: String!) {
    allContentfulCluster(filter: { title: { eq: $title } }) {
        nodes {
            title
            subtitle
            buildingSize
            landingImage{
                fluid{
                    src
                }
            }
            organizations{
                slug
                organizationName
                acronym
                logo {
                    fluid {
                        src
                    }
                }
                building {
                    fluid {
                        src
                    }
                }
                x
                y
            }
        }
    }
  }
`