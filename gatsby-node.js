const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulCluster {
        nodes {
          title
          organizations {
            slug
            acronym
            organizationName
            about {
                json
            }
            youtubeVideoLink
            backgroundImage{
                fluid(quality: 80, maxWidth: 900) {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
            }
            logo {
                title
                fixed(width: 128, height: 128) {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
            }
            mainEvents {
                eventName
                description {
                    json
                }
            }
            media {
              fluid(quality: 80, maxWidth: 400) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
            mission {
                json
            }
            vision {
                json
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
    }
  `);
  
  // console.log(result)
  result.data.allContentfulCluster.nodes.forEach(node => {
    createPage({
      path: `clusters/${node.title}`,
      component: path.resolve(`./src/templates/clusterpage.js`),
      context: {
        title: node.title,
      },
    });

    try {
      node.organizations.forEach((organization) => {
        console.log(organization)
        createPage({
          path: `organizations/${organization.slug}`,
          component: path.resolve(`./src/templates/orgTemplate.js`),
          context: {
            data: { organization },
          },
        })
      })
    } catch (error) {
      console.log(error)
    }
  });
};
