import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout"

import Img from "gatsby-image";

export default function ClusterPage({ data }) {

    const { landingImage, title, subtitle, organizations } = data.allContentfulCluster.nodes[0]
    return (
        <Layout pageName="cluster">
            <div className="organization-header">
                <p className="main-header">{subtitle}(<strong>{title}</strong>)</p>
            </div>
            <Img  draggable={false} fluid={landingImage.fluid} />
            <div className="organization-list">
                <h1 className="main-header" >Organizations under {title}</h1>
                <div className="sub-line" />
                <div className="list">
                    {organizations ? organizations.map((org, index) => {
                        return (
                            <div className="item" key={index}>
                                <AniLink
                                    cover
                                    to={org.slug}
                                    bg="#6666ff"
                                    duration={0.7}
                                    className="header-link"
                                >
                                    <div className="org-item">
                                        <Img draggable={false} fluid={org.logo.fluid} />
                                        <h1 className="sub-title">{org.organizationName}(<strong>{org.acronym}</strong>)</h1>
                                    </div>
                                </AniLink>
                            </div>
                        )
                    }) : <div></div>}
                    <div className="item"><h1 className="sub-title">Hello</h1></div>
                    <div className="item"><h1 className="sub-title">Hello</h1></div>
                    <div className="item"><h1 className="sub-title">Hello</h1></div>
                    <div className="item"><h1 className="sub-title">Hello</h1></div>
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
            landingImage{
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
            organizations{
                slug
                organizationName
                acronym
                logo {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
  }
`