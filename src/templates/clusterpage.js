import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout"

import Img from "gatsby-image";

export default function ClusterPage({ data }) {

    const { landingImage, title, subtitle, organizations } = data.allContentfulCluster.nodes[0]
    return (
        <Layout pageName="cluster">
            <h1 className="organization-header">{subtitle}({title})</h1>
            <Img fluid={landingImage.fluid} />
            <div className="organization-list">
                <h1>Organization under {title}</h1>
                <ul>
                    {organizations ? organizations.map((org, index) => {
                        return (
                            <li key={index}>
                                <AniLink
                                    cover
                                    to={org.slug}
                                    bg="#6666ff"
                                    duration={0.7}
                                    className="header-link"
                                >
                                    <div className="org-item">
                                        <p>{org.organizationName}</p>
                                        <p>{org.acronym}</p>
                                        <Img  fluid={org.logo.fluid} />
                                    </div>
                                </AniLink>
                            </li>
                        )
                    }) : <div></div>}
                </ul>
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