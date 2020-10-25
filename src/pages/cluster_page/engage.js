import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout"
import Container from "../components/Container"

import Img from "gatsby-image"

export default function ClusterPage({ data }) {

    const { title, subtitle, image, organizations } = data.allContentfulCluster.nodes[0]
    return (
        <Layout>

            <Container>
                <p className="cover">
                    <Img fluid={image.fluid} />
                </p>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </Container>
            <section>
                <ul>
                    {organizations ? organizations.map(org => {
                        console.log(org)
                        return (
                            <li>
                                <AniLink
                                    cover
                                    to={org.slug}
                                    bg="#6666ff"
                                    duration={0.7}
                                    className="header-link"
                                >
                                    <div>
                                        <p>{org.organizationName}</p>
                                        <p>{org.acronym}</p>
                                    </div>
                                </AniLink>
                            </li>
                        )
                    }) : <div></div>}
                </ul>
            </section>
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
            }
        }
    }
  }
`