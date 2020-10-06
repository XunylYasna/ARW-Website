import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"

export default function Home({ data }) {

    const cluster = data.allContentfulCluster.nodes[0]
    return (
        <Layout>
            <section>
                <h1>{cluster.title}</h1>
                <h3>{cluster.subtitle}</h3>
            </section>
            <section>
                <ul>
                    {cluster.organizations.map(org => {
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
                    })}
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
            organizations{
                slug
                organizationName
                acronym
            }
        }
    }
  }
`