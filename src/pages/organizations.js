import React, { useEffect } from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";

import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { TimelineLite } from "gsap";
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Logo = (link) => <img className="logo" src={link.value} />;
const ViewPage = (slug) => <AniLink className="button" to={'/organizations/' + slug.value}><div id="dub-arrow"><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div><span>View Page</span></AniLink>;

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
            'acronym': acronym ? acronym : '',
            'organizationName': organizationName ? organizationName : '',
            'cluster': cluster ? (cluster[0] ? cluster[0].title : '') : '',
            'slug': slug
        }
    })

    // const organizationsTimeline = new TimelineLite()

    // const fadeIn = () => {
    //     organizationsTimeline
    //         .staggerFrom('.griddle-row', 0.5, { opacity: 0, y: 20 }, 0.1)
    // }

    // useEffect(() => {
    //     fadeIn()
    // }, [])

    return (
        <Layout pageName="organizations">
            <Helmet>
                <title>Organizations</title>
            </Helmet>
            <Griddle
                data={data}
                sortProperties={[{ id: 'acronym', sortAscending: true }]}
                plugins={[plugins.LocalPlugin]}
                components={{
                    // hide settings toggle button
                    SettingsToggle: () => <span />,
                    PageDropdown: (page) => page.maxPages != 0 ? <div className="page-identifier">Page {page.currentPage}/{page.maxPages}</div> : <span />,
                    NextButton: (next) => next.hasNext ? <div className={next.className} onClick={next.onClick}><GrFormNext /></div> : <span />,
                    PreviousButton: (prev) => prev.hasPrevious ? <div className={prev.className} onClick={prev.onClick}><GrFormPrevious /></div> : <span />
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
                        Pagination: 'griddle-pagination',
                        PreviousButton: 'griddle-previous-button',
                        Row: 'griddle-row',
                        RowDefinition: 'griddle-row-definition',
                        Table: 'griddle-table',
                        TableBody: 'griddle-table-body',
                        TableHeading: 'griddle-table-heading',
                    },
                 }}
            >
                <RowDefinition>
                    <ColumnDefinition id="logo" title="Logo" sortable={false} customComponent={Logo} /> 
                    <ColumnDefinition id="acronym" title="Acronym" />
                    <ColumnDefinition id="organizationName" title="Organization Name" />
                    <ColumnDefinition id="cluster" title="Cluster" />   
                    <ColumnDefinition id="slug" title=" " sortable={false} customComponent={ViewPage} />   
                </RowDefinition>
            </Griddle>
        </Layout>
    );
};

export default OrganizationsPage;