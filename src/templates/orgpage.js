import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function OrgPage({ data }) {
    return (
        <Layout>
            <h1>{data.allContentfulOrganization.nodes[0].acronym}</h1>
            <h2>{data.allContentfulOrganization.nodes[0].organizationName}</h2>

        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allContentfulOrganization(filter: { slug: { eq: $slug } }) {
        nodes {
            acronym
            organizationName
        }
    }
  }
`