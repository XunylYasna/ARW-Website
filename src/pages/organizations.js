import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";

import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';

const Logo = (link) => <img className="logo" src={link.value} />;
const ViewPage = (slug) => <AniLink to={'/organizations/' + slug.value}>View Page</AniLink>;

const OrganizationsPage = () => {
    const query = useStaticQuery(graphql`
      query {
        allContentfulOrganization {
            edges {
                node {
                    acronym
                    cluster {
                        title
                    }
                    slug
                    logo {
                        fluid {
                            src
                        }
                    }
                    organizationName
                }
            }
        }
      }
    `);

    const data = query.allContentfulOrganization.edges.map((organization, i) => {
        const { acronym, cluster, slug, logo, organizationName } = organization.node;

        return {
            'logo': logo.fluid.src,
            'acronym': acronym ? acronym : '---',
            'organizationName': organizationName ? organizationName : '---',
            'cluster': cluster ? (cluster[0] ? cluster[0].title : '---') : '---',
            'slug': slug
        }
    })

    return (
        <Layout pageName="organizations">
            <Helmet>
                <title>Organizations</title>
            </Helmet>
            <Griddle
                data={data}
                plugins={[plugins.LocalPlugin]}
                components={{
                   // hide settings toggle button
                   SettingsToggle: () => <span />,
                }}
                styleConfig={{
                    icons: {
                        TableHeadingCell: {
                            sortDescendingIcon: '▼',
                            sortAscendingIcon: '▲',
                        },
                    },
                    classNames: {
                        Cell: 'griddle-cell',
                        Filter: 'griddle-filter',
                        NextButton: 'griddle-next-button',
                        NoResults: 'griddle-no-results',
                        PageDropdown: 'griddle-page-select',
                        Pagination: 'griddle-pagination',
                        PreviousButton: 'griddle-previous-button',
                        Row: 'griddle-row',
                        RowDefinition: 'griddle-row-definition',
                        Table: 'griddle-table',
                        TableBody: 'griddle-table-body',
                        TableHeading: 'griddle-table-heading',
                    },
                    styles: {},
                 }}
            >
                <RowDefinition>
                    <ColumnDefinition id="logo" title="Logo" customComponent={Logo} /> 
                    <ColumnDefinition id="acronym" title="Acronym" />
                    <ColumnDefinition id="organizationName" title="Organization Name" />
                    <ColumnDefinition id="cluster" title="Cluster" />   
                    <ColumnDefinition id="slug" title="Page" customComponent={ViewPage} />   
                </RowDefinition>
            </Griddle>
        </Layout>
    );
};

export default OrganizationsPage;